export type Categoria = "alimento" | "transporte" | "lazer" | "saúde" | "outros";

export type Despesa = {
   id: string;
   titulo: string;
   valor: number;
   categoria: Categoria;
};

export const categorias: Categoria[] = ["alimento", "transporte", "lazer", "saúde", "outros"];
