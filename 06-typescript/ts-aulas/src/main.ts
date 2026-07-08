import "./style.css";
import { categorias, type Categoria, type Despesa } from "./types";

const despesas: Despesa[] = [];
const formatadorMoeda = new Intl.NumberFormat("pt-BR", {
   style: "currency",
   currency: "BRL",
});

const form = document.getElementById("form-despesa") as HTMLFormElement | null;
const tituloInput = document.getElementById("titulo") as HTMLInputElement | null;
const valorInput = document.getElementById("valor") as HTMLInputElement | null;
const categoriaSelect = document.getElementById("categoria") as HTMLSelectElement | null;
const feedbackElement = document.getElementById("form-feedback") as HTMLParagraphElement | null;
const listaVaziaElement = document.getElementById("lista-vazia") as HTMLParagraphElement | null;
const listaDespesasElement = document.getElementById("lista-despesas") as HTMLUListElement | null;
const totalGeralElement = document.getElementById("total-geral") as HTMLElement | null;
const contadorElement = document.getElementById("contador-despesas") as HTMLElement | null;

const totaisCategoria: Record<Categoria, HTMLElement | null> = {
   alimento: document.querySelector('[data-category-total="alimento"]'),
   transporte: document.querySelector('[data-category-total="transporte"]'),
   lazer: document.querySelector('[data-category-total="lazer"]'),
   saúde: document.querySelector('[data-category-total="saúde"]'),
   outros: document.querySelector('[data-category-total="outros"]'),
};

function formatarMoeda(valor: number): string {
   return formatadorMoeda.format(valor);
}

function gerarId(): string {
   if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
      return crypto.randomUUID();
   }

   return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function capitalizar(texto: string): string {
   return texto.charAt(0).toUpperCase() + texto.slice(1);
}

function limparValidacao(): void {
   if (tituloInput) {
      tituloInput.classList.remove("is-invalid");
      tituloInput.removeAttribute("aria-invalid");
   }

   if (valorInput) {
      valorInput.classList.remove("is-invalid");
      valorInput.removeAttribute("aria-invalid");
   }

   if (categoriaSelect) {
      categoriaSelect.classList.remove("is-invalid");
      categoriaSelect.removeAttribute("aria-invalid");
   }

   if (feedbackElement) {
      feedbackElement.hidden = true;
      feedbackElement.textContent = "";
   }
}

function sinalizarErro(campo: HTMLInputElement | HTMLSelectElement): void {
   campo.classList.add("is-invalid");
   campo.setAttribute("aria-invalid", "true");
}

function mostrarFeedback(
   mensagem: string,
   camposInvalidos: Array<HTMLInputElement | HTMLSelectElement>
): void {
   if (feedbackElement) {
      feedbackElement.textContent = mensagem;
      feedbackElement.hidden = false;
   }

   for (const campo of camposInvalidos) {
      sinalizarErro(campo);
   }
}

function criarResumoPorCategoria(): Record<Categoria, number> {
   return despesas.reduce<Record<Categoria, number>>(
      (acumulado, despesa) => {
         acumulado[despesa.categoria] += despesa.valor;
         return acumulado;
      },
      {
         alimento: 0,
         transporte: 0,
         lazer: 0,
         saúde: 0,
         outros: 0,
      }
   );
}

function atualizarResumo(): void {
   const resumo = criarResumoPorCategoria();
   const totalGeral = despesas.reduce((soma, despesa) => soma + despesa.valor, 0);

   if (totalGeralElement) {
      totalGeralElement.textContent = formatarMoeda(totalGeral);
   }

   if (contadorElement) {
      contadorElement.textContent = `${despesas.length} ${despesas.length === 1 ? "item" : "itens"}`;
   }

   for (const categoria of categorias) {
      const elemento = totaisCategoria[categoria];
      if (elemento) {
         elemento.textContent = formatarMoeda(resumo[categoria]);
      }
   }
}

function criarItemDespesa(despesa: Despesa): HTMLLIElement {
   const item = document.createElement("li");
   item.className = "expense-item";

   const conteudo = document.createElement("div");
   conteudo.className = "expense-item__content";

   const titulo = document.createElement("p");
   titulo.className = "expense-item__title";
   titulo.textContent = despesa.titulo;

   const categoria = document.createElement("span");
   categoria.className = "badge";
   categoria.textContent = capitalizar(despesa.categoria);

   const meta = document.createElement("p");
   meta.className = "expense-item__meta";
   meta.textContent = "Despesa registrada";

   conteudo.append(titulo, meta);

   const valores = document.createElement("div");
   valores.className = "expense-item__meta";

   const valor = document.createElement("strong");
   valor.className = "expense-item__price";
   valor.textContent = formatarMoeda(despesa.valor);

   valores.append(valor, categoria);
   item.append(conteudo, valores);

   return item;
}

function renderizarDespesas(): void {
   if (!listaDespesasElement || !listaVaziaElement) {
      return;
   }

   const fragmento = document.createDocumentFragment();
   for (const despesa of despesas) {
      fragmento.append(criarItemDespesa(despesa));
   }

   listaDespesasElement.replaceChildren(fragmento);
   listaVaziaElement.hidden = despesas.length > 0;
}

function adicionarDespesa(titulo: string, valor: number, categoria: Categoria): void {
   despesas.unshift({
      id: gerarId(),
      titulo,
      valor,
      categoria,
   });

   renderizarDespesas();
   atualizarResumo();
}

if (form && tituloInput && valorInput && categoriaSelect) {
   form.addEventListener("submit", (evento) => {
      evento.preventDefault();
      limparValidacao();

      const titulo = tituloInput.value.trim();
      const valor = Number(valorInput.value);
      const categoria = categoriaSelect.value as Categoria;
      const camposInvalidos: Array<HTMLInputElement | HTMLSelectElement> = [];

      if (!titulo) {
         camposInvalidos.push(tituloInput);
      }

      if (!Number.isFinite(valor) || valor <= 0) {
         camposInvalidos.push(valorInput);
      }

      if (!categorias.includes(categoria)) {
         camposInvalidos.push(categoriaSelect);
      }

      if (camposInvalidos.length > 0) {
         mostrarFeedback(
            "Preencha título, valor positivo e categoria para adicionar a despesa.",
            camposInvalidos
         );
         return;
      }

      adicionarDespesa(titulo, valor, categoria);
      form.reset();
      tituloInput.focus();
   });

   tituloInput.addEventListener("input", () => limparValidacao());
   valorInput.addEventListener("input", () => limparValidacao());
   categoriaSelect.addEventListener("change", () => limparValidacao());
}

renderizarDespesas();
atualizarResumo();
