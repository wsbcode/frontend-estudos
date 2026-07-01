const input = document.querySelector("#search-input");
const statusMessage = document.querySelector("#status-message");
const resultsContainer = document.querySelector("#results");

const API_URL = "https://api.github.com/search/repositories?q=";
const MAX_RESULTS = 10;

function clearResults() {
   resultsContainer.innerHTML = "";
}

function setStatus(message, type = "") {
   statusMessage.className = "status-message";
   if (type) {
      statusMessage.classList.add(type);
   }
   statusMessage.textContent = message;
}

function renderInitialState() {
   clearResults();
   setStatus("Digite um termo acima e pressione Enter para buscar repositórios.");
}

function renderEmptyState() {
   clearResults();
   setStatus("Nenhum repositório encontrado para essa busca.", "is-empty");
}

function renderErrorState() {
   clearResults();
   setStatus("Não foi possível realizar a busca agora. Tente novamente em instantes.", "is-error");
}

function renderLoadingState() {
   clearResults();
   setStatus("Buscando repositórios...", "is-loading");
}

function formatRepositoryCard(repository) {
   const card = document.createElement("article");
   card.className = "repo-card";

   const avatar = document.createElement("img");
   avatar.className = "repo-avatar";
   avatar.src = repository.owner.avatar_url;
   avatar.alt = `Foto de ${repository.owner.login}`;

   const content = document.createElement("div");
   content.className = "repo-content";

   const title = document.createElement("h2");
   const link = document.createElement("a");
   link.href = repository.html_url;
   link.target = "_blank";
   link.rel = "noopener noreferrer";
   link.textContent = repository.name;
   title.appendChild(link);

   const description = document.createElement("p");
   description.className = "repo-description";
   description.textContent = repository.description || "Sem descrição disponível.";

   const meta = document.createElement("p");
   meta.className = "repo-meta";
   meta.innerHTML = `
    <span>Autor: ${repository.owner.login}</span>
    <span>Estrelas: ${repository.stargazers_count}</span>
    <span>Linguagem: ${repository.language || "Não informada"}</span>
  `;

   content.append(title, description, meta);
   card.append(avatar, content);
   return card;
}

function renderResults(items) {
   clearResults();
   setStatus(`${items.length} repositório(s) encontrado(s).`);

   const fragment = document.createDocumentFragment();
   items.forEach((repository) => {
      fragment.appendChild(formatRepositoryCard(repository));
   });

   resultsContainer.appendChild(fragment);
}

async function searchRepositories(term) {
   const query = term.trim();

   if (!query) {
      renderInitialState();
      return;
   }

   renderLoadingState();

   try {
      const response = await fetch(
         `${API_URL}${encodeURIComponent(query)}&sort=stars&per_page=${MAX_RESULTS}`
      );

      if (!response.ok) {
         throw new Error(`Request failed with status ${response.status}`);
      }

      const data = await response.json();
      const repositories = Array.isArray(data.items) ? data.items : [];

      if (repositories.length === 0) {
         renderEmptyState();
         return;
      }

      renderResults(repositories);
   } catch (error) {
      renderErrorState();
   }
}

input.addEventListener("keydown", (event) => {
   if (event.key.toLowerCase() !== "enter") {
      return;
   }

   event.preventDefault();
   searchRepositories(input.value);
});

renderInitialState();
