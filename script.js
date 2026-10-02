(() => {
  "use strict";

  // ============================================================
  // DADOS DOS PROFISSIONAIS
  // ============================================================

  const professionals = [
    {
      id: 1,
      name: "Carlos Henrique",
      profession: "Eletricista",
      category: "Elétrica",
      specialties: [
        "Instalação elétrica",
        "Tomadas e interruptores",
        "Chuveiros",
        "Manutenção residencial"
      ],
      rating: 4.9,
      reviews: 127,
      distance: 1.8,
      price: "R$ 80 a R$ 250",
      availability: "Disponível hoje",
      availableToday: true,
      serviceArea: "Centro e bairros próximos",
      experience: "8 anos",
      about:
        "Atendo serviços elétricos residenciais, desde pequenos reparos até instalações e manutenção. Trabalho com orçamento prévio e procuro explicar ao cliente o serviço necessário antes da execução.",
      initials: "CH",
      reviewsData: [
        [
          "Ana Paula",
          "Resolveu o problema da tomada rapidamente e explicou o que havia acontecido."
        ],
        [
          "Rafael Souza",
          "Foi pontual, organizado e deixou tudo funcionando antes de finalizar."
        ],
        [
          "Juliana Mendes",
          "Fez a instalação do chuveiro com bastante cuidado. Recomendo o serviço."
        ]
      ]
    },

    {
      id: 2,
      name: "Mariana Alves",
      profession: "Técnica em Informática",
      category: "Informática",
      specialties: [
        "Formatação",
        "Configuração de computadores",
        "Redes domésticas",
        "Instalação de software"
      ],
      rating: 4.8,
      reviews: 94,
      distance: 2.4,
      price: "R$ 60 a R$ 180",
      availability: "Disponível hoje",
      availableToday: true,
      serviceArea: "Centro, São Miguel e Vila Júlia",
      experience: "6 anos",
      about:
        "Faço manutenção e configuração de computadores e redes domésticas. Também auxilio na instalação de programas e organização de equipamentos para estudo e trabalho.",
      initials: "MA",
      reviewsData: [
        [
          "Diego Martins",
          "Configurou meu computador e explicou como evitar que o problema voltasse."
        ],
        [
          "Camila Rosa",
          "Atendimento rápido e muito claro. Resolveu minha rede Wi-Fi."
        ],
        [
          "Bruno Ferreira",
          "Chegou no horário e entregou o computador conforme combinado."
        ]
      ]
    },

    {
      id: 3,
      name: "João Pedro Martins",
      profession: "Encanador",
      category: "Hidráulica",
      specialties: [
        "Vazamentos",
        "Torneiras",
        "Sifões",
        "Manutenção hidráulica"
      ],
      rating: 4.7,
      reviews: 81,
      distance: 3.1,
      price: "R$ 90 a R$ 300",
      availability: "Amanhã",
      availableToday: false,
      serviceArea: "Centro e bairros residenciais",
      experience: "10 anos",
      about:
        "Atuo com manutenção hidráulica residencial e pequenos reparos. Avalio o problema antes do serviço e apresento as opções de solução para o cliente.",
      initials: "JP",
      reviewsData: [
        [
          "Marcos Lima",
          "Identificou o vazamento sem precisar quebrar a parede. Serviço muito bem explicado."
        ],
        [
          "Fernanda Alves",
          "Trocou a torneira e resolveu o problema do sifão no mesmo atendimento."
        ],
        [
          "Lucas Ribeiro",
          "Foi cuidadoso e deixou o local limpo depois do reparo."
        ]
      ]
    },

    {
      id: 4,
      name: "Patrícia Nunes",
      profession: "Profissional de Limpeza",
      category: "Limpeza",
      specialties: [
        "Limpeza residencial",
        "Pós-obra",
        "Cozinha",
        "Banheiros"
      ],
      rating: 4.9,
      reviews: 116,
      distance: 2.0,
      price: "R$ 120 a R$ 280",
      availability: "Disponível hoje",
      availableToday: true,
      serviceArea: "Centro, Mascarenhas de Moraes e Bela Vista",
      experience: "7 anos",
      about:
        "Realizo limpeza residencial com foco em organização e cuidado com os ambientes. Posso atender rotinas de manutenção ou serviços mais completos.",
      initials: "PN",
      reviewsData: [
        [
          "Carla Dias",
          "Muito cuidadosa com os móveis e deixou a casa impecável."
        ],
        [
          "Renata Costa",
          "Ótimo atendimento e bastante atenção aos detalhes."
        ],
        [
          "Sérgio Melo",
          "Cumpriu o horário e fez exatamente o que combinamos."
        ]
      ]
    },

    {
      id: 5,
      name: "André Luiz Costa",
      profession: "Pintor Residencial",
      category: "Pintura",
      specialties: [
        "Pintura interna",
        "Pintura externa",
        "Correção de paredes",
        "Textura"
      ],
      rating: 4.6,
      reviews: 63,
      distance: 4.2,
      price: "R$ 250 a R$ 900",
      availability: "Amanhã",
      availableToday: false,
      serviceArea: "Centro e bairros próximos",
      experience: "9 anos",
      about:
        "Trabalho com pintura e preparação de superfícies para residências. Faço pequenos reparos nas paredes antes da aplicação da tinta.",
      initials: "AC",
      reviewsData: [
        [
          "Mônica Reis",
          "A parede ficou muito bem preparada e a pintura ficou uniforme."
        ],
        [
          "Thiago Souza",
          "Orçamento claro e serviço entregue no prazo."
        ],
        [
          "Paulo Mendes",
          "Cuidou bem dos móveis durante a pintura."
        ]
      ]
    },

    {
      id: 6,
      name: "Beatriz Oliveira",
      profession: "Jardineira",
      category: "Jardinagem",
      specialties: [
        "Poda",
        "Manutenção de jardins",
        "Plantio",
        "Limpeza de canteiros"
      ],
      rating: 4.8,
      reviews: 72,
      distance: 5.0,
      price: "R$ 90 a R$ 240",
      availability: "Disponível hoje",
      availableToday: true,
      serviceArea: "Bairros residenciais e zona central",
      experience: "5 anos",
      about:
        "Cuido de jardins residenciais, incluindo poda, limpeza, plantio e manutenção periódica. Posso montar uma rotina de cuidados conforme o espaço.",
      initials: "BO",
      reviewsData: [
        [
          "Nádia Silva",
          "O jardim ficou muito mais organizado e as plantas foram preservadas."
        ],
        [
          "Eduardo Reis",
          "Explicou quais plantas precisavam de mais atenção."
        ],
        [
          "Helena Martins",
          "Serviço caprichado e muito pontual."
        ]
      ]
    },

    {
      id: 7,
      name: "Rafael Gomes",
      profession: "Montador de Móveis",
      category: "Montagem de móveis",
      specialties: [
        "Móveis planejados",
        "Guarda-roupas",
        "Estantes",
        "Móveis de cozinha"
      ],
      rating: 4.7,
      reviews: 105,
      distance: 1.2,
      price: "R$ 70 a R$ 220",
      availability: "Disponível hoje",
      availableToday: true,
      serviceArea: "Centro e todos os bairros próximos",
      experience: "7 anos",
      about:
        "Monto móveis residenciais com atenção ao nivelamento e acabamento. Também faço desmontagem e remontagem em mudanças.",
      initials: "RG",
      reviewsData: [
        [
          "Marina Lopes",
          "Montou o guarda-roupa com bastante cuidado e conferiu todas as portas."
        ],
        [
          "Gustavo Alves",
          "Chegou rápido e deixou o móvel bem nivelado."
        ],
        [
          "Alice Ramos",
          "Excelente acabamento na montagem da cozinha."
        ]
      ]
    },

    {
      id: 8,
      name: "Felipe Martins",
      profession: "Técnico de Manutenção Residencial",
      category: "Manutenção residencial",
      specialties: [
        "Pequenos reparos",
        "Instalação de prateleiras",
        "Ajustes domésticos",
        "Manutenção geral"
      ],
      rating: 4.5,
      reviews: 48,
      distance: 3.7,
      price: "R$ 70 a R$ 230",
      availability: "Amanhã",
      availableToday: false,
      serviceArea: "Centro, São João e Santo Antônio",
      experience: "4 anos",
      about:
        "Atendo pequenos reparos e ajustes residenciais que não exigem serviços especializados. Posso resolver várias tarefas em uma única visita.",
      initials: "FM",
      reviewsData: [
        [
          "Rodrigo Silva",
          "Resolveu várias pequenas coisas de uma vez e foi muito organizado."
        ],
        [
          "Tatiane Moraes",
          "Instalou as prateleiras e explicou como reforçou a fixação."
        ],
        [
          "Daniela Souza",
          "Serviço honesto e bem executado."
        ]
      ]
    }
  ];

  // ============================================================
  // ESTADO DA APLICAÇÃO
  // ============================================================

  const state = {
    currentScreen: "search",
    searchTerm: "",
    location: "",
    selectedProfessional: null,
    selectedService: "",
    filters: {
      availability: "all"
    },
    sortOrder: "relevant",
    previousScreen: "results",
    lastResults: []
  };

  // ============================================================
  // CATEGORIAS
  // ============================================================

  const categories = [
    ["⚡", "Elétrica"],
    ["💧", "Hidráulica"],
    ["🧹", "Limpeza"],
    ["💻", "Informática"],
    ["🎨", "Pintura"],
    ["🪑", "Montagem de móveis"]
  ];

  // ============================================================
  // ELEMENTOS PRINCIPAIS
  // ============================================================

  const app = document.getElementById("app");
  const toastRegion = document.getElementById("toast-region");

  // ============================================================
  // FUNÇÕES AUXILIARES
  // ============================================================

  function normalize(value) {
    return String(value || "")
      .toLocaleLowerCase("pt-BR")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function capitalize(value) {
    if (!value) {
      return "";
    }

    return (
      value.charAt(0).toLocaleUpperCase("pt-BR") +
      value.slice(1)
    );
  }

  function formatDistance(distance) {
    return `${distance.toLocaleString("pt-BR", {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1
    })} km`;
  }

  function stars() {
    return "★★★★★";
  }

  function showFeedback(message, type = "info") {
    const toast = document.createElement("div");

    toast.className =
      type === "success"
        ? "toast success"
        : type === "error"
        ? "toast error"
        : "toast";

    toast.setAttribute("role", "status");
    toast.textContent = message;

    toastRegion.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 3600);
  }

  function setFocusMain() {
    requestAnimationFrame(() => {
      document.getElementById("main-content")?.focus();
    });
  }

  // ============================================================
  // NAVEGAÇÃO
  // ============================================================

  function renderScreen(screen) {
    state.currentScreen = screen;

    if (screen === "search") {
      renderSearch();
    }

    if (screen === "results") {
      renderResults();
    }

    if (screen === "profile") {
      renderProfile();
    }

    if (screen === "quote") {
      renderQuoteForm();
    }

    if (screen === "confirmation") {
      renderConfirmation();
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    setFocusMain();
  }

  // ============================================================
  // TELA DE BUSCA
  // ============================================================

  function renderSearch() {
    app.innerHTML = `
      <section class="hero" aria-labelledby="hero-title">
        <div class="container hero-grid">

          <div>
            <p class="eyebrow">
              Serviços locais, sem complicação
            </p>

            <h1 id="hero-title">
              Encontre profissionais de confiança perto de você
            </h1>

            <p class="hero-copy">
              Encontre especialistas para pequenos serviços,
              compare avaliações e solicite um orçamento de forma simples.
            </p>
          </div>

          <form class="search-panel" id="search-form" novalidate>

            <div class="form-grid">

              <div class="field" id="search-service-field">

                <label for="search-service">
                  Que serviço você precisa?
                </label>

                <input
                  id="search-service"
                  name="service"
                  type="search"
                  autocomplete="off"
                  placeholder="Ex.: eletricista, encanador ou montagem de móveis"
                  value="${escapeHtml(state.searchTerm)}"
                >

              </div>

              <div class="field" id="search-location-field">

                <label for="search-location">
                  Onde você precisa do serviço?
                </label>

                <input
                  id="search-location"
                  name="location"
                  type="text"
                  autocomplete="address-level2"
                  placeholder="Ex.: Centro, Uruguaiana"
                  value="${escapeHtml(state.location)}"
                >

              </div>

              <button
                class="primary-btn"
                type="submit"
              >
                Buscar profissionais
              </button>

            </div>

          </form>

        </div>
      </section>

      <section
        class="section"
        aria-labelledby="categories-title"
      >

        <div class="container">

          <div class="section-header">

            <h2 id="categories-title">
              Serviços populares
            </h2>

            <p>
              Comece por uma categoria ou pesquise o serviço que você precisa.
            </p>

          </div>

          <div class="category-grid">

            ${categories
              .map(
                ([icon, label]) => `
                  <button
                    class="category-card"
                    type="button"
                    data-category="${escapeHtml(label)}"
                  >

                    <span
                      class="category-icon"
                      aria-hidden="true"
                    >
                      ${icon}
                    </span>

                    ${escapeHtml(label)}

                  </button>
                `
              )
              .join("")}

          </div>

        </div>

      </section>

      <section
        class="section"
        aria-labelledby="benefits-title"
      >

        <div class="container">

          <div class="section-header">

            <h2 id="benefits-title">
              Uma escolha mais simples
            </h2>

            <p>
              Compare o que importa antes de pedir um orçamento.
            </p>

          </div>

          <div class="benefit-grid">

            <article class="benefit-card">

              <div
                class="benefit-number"
                aria-hidden="true"
              >
                1
              </div>

              <h3>
                Profissionais locais
              </h3>

              <p>
                Encontre pessoas que atendem na sua região.
              </p>

            </article>

            <article class="benefit-card">

              <div
                class="benefit-number"
                aria-hidden="true"
              >
                2
              </div>

              <h3>
                Avaliações reais
              </h3>

              <p>
                Compare experiências e notas de outros clientes.
              </p>

            </article>

            <article class="benefit-card">

              <div
                class="benefit-number"
                aria-hidden="true"
              >
                3
              </div>

              <h3>
                Orçamento fácil
              </h3>

              <p>
                Envie os detalhes do serviço sem complicação.
              </p>

            </article>

          </div>

        </div>

      </section>
    `;

    const form = document.getElementById("search-form");

    form.addEventListener(
      "submit",
      handleSearchSubmit
    );

    document
      .querySelectorAll("[data-category]")
      .forEach((button) => {

        button.addEventListener("click", () => {

          state.searchTerm = button.dataset.category;

          const input =
            document.getElementById("search-service");

          input.value = state.searchTerm;

          input.focus();

          showFeedback(
            `Categoria "${state.searchTerm}" selecionada.`
          );
        });
      });
  }

  // ============================================================
  // BUSCA
  // ============================================================

  function handleSearchSubmit(event) {
    event.preventDefault();

    const serviceInput =
      document.getElementById("search-service");

    const locationInput =
      document.getElementById("search-location");

    const service = serviceInput.value.trim();
    const location = locationInput.value.trim();

    clearSearchErrors();

    let valid = true;

    if (!service) {
      setFieldError(
        "search-service-field",
        "Informe o serviço que você precisa.",
        "search-service"
      );

      valid = false;
    }

    if (!location) {
      setFieldError(
        "search-location-field",
        "Informe onde o serviço será realizado.",
        "search-location"
      );

      valid = false;
    }

    if (!valid) {
      showFeedback(
        "Preencha os dois campos para realizar a busca.",
        "error"
      );

      return;
    }

    state.searchTerm = service;
    state.location = location;

    state.filters.availability = "all";
    state.sortOrder = "relevant";

    state.lastResults = getFilteredResults();

    renderScreen("results");
  }

  function clearSearchErrors() {
    document
      .querySelectorAll(".field.has-error")
      .forEach((element) => {

        element.classList.remove("has-error");

        const error =
          element.querySelector(".error-text");

        if (error) {
          error.remove();
        }
      });

    document
      .querySelectorAll("[aria-invalid='true']")
      .forEach((element) => {

        element.removeAttribute("aria-invalid");
        element.removeAttribute("aria-describedby");
      });
  }

  function setFieldError(
    fieldId,
    message,
    inputId
  ) {
    const field =
      document.getElementById(fieldId);

    if (!field) {
      return;
    }

    field.classList.add("has-error");

    const oldError =
      field.querySelector(".error-text");

    if (oldError) {
      oldError.remove();
    }

    const error =
      document.createElement("span");

    error.className = "error-text";
    error.id = `${inputId}-error`;
    error.textContent = message;

    field.appendChild(error);

    const input =
      document.getElementById(inputId);

    if (input) {
      input.setAttribute(
        "aria-invalid",
        "true"
      );

      input.setAttribute(
        "aria-describedby",
        error.id
      );

      input.focus();
    }
  }

  // ============================================================
  // FILTRO E BUSCA DOS PROFISSIONAIS
  // ============================================================

  function getSearchPool() {
    const term = normalize(state.searchTerm);

    if (!term) {
      return professionals.slice();
    }

    return professionals.filter((professional) => {

      const searchableText = [
        professional.name,
        professional.profession,
        professional.category,
        ...professional.specialties
      ]
        .map(normalize)
        .join(" ");

      return searchableText.includes(term);
    });
  }

  function getFilteredResults() {
    let results = getSearchPool();

    if (
      state.filters.availability === "today"
    ) {
      results = results.filter(
        (professional) =>
          professional.availableToday
      );
    }

    if (state.sortOrder === "rating") {
      results.sort((a, b) => {

        if (b.rating !== a.rating) {
          return b.rating - a.rating;
        }

        return b.reviews - a.reviews;
      });
    }

    if (state.sortOrder === "distance") {
      results.sort(
        (a, b) =>
          a.distance - b.distance
      );
    }

    return results;
  }

  // ============================================================
  // TELA DE RESULTADOS
  // ============================================================

  function renderResults() {
    const results = getFilteredResults();

    state.lastResults = results;

    app.innerHTML = `
      <section
        class="page-section"
        aria-labelledby="results-title"
      >

        <div class="container">

          <div class="breadcrumbs">

            <button
              type="button"
              data-action="go-search"
            >
              Nova busca
            </button>

            <span aria-hidden="true">
              ›
            </span>

            <span>
              Resultados
            </span>

          </div>

          <div class="results-head">

            <div>

              <p class="eyebrow">
                Busca local
              </p>

              <h1 id="results-title">
                Profissionais encontrados
              </h1>

              <p>
                ${escapeHtml(
                  resultHeading()
                )}
              </p>

            </div>

            <button
              class="secondary-btn"
              type="button"
              data-action="go-search"
            >
              Alterar busca
            </button>

          </div>

          <div
            class="controls"
            aria-label="Controles de resultados"
          >

            <div class="control">

              <label for="availability-filter">
                Disponibilidade
              </label>

              <select id="availability-filter">

                <option
                  value="all"
                  ${
                    state.filters.availability === "all"
                      ? "selected"
                      : ""
                  }
                >
                  Todos
                </option>

                <option
                  value="today"
                  ${
                    state.filters.availability === "today"
                      ? "selected"
                      : ""
                  }
                >
                  Disponível hoje
                </option>

              </select>

            </div>

            <div class="control">

              <label for="sort-order">
                Ordenar por
              </label>

              <select id="sort-order">

                <option
                  value="relevant"
                  ${
                    state.sortOrder === "relevant"
                      ? "selected"
                      : ""
                  }
                >
                  Mais relevantes
                </option>

                <option
                  value="rating"
                  ${
                    state.sortOrder === "rating"
                      ? "selected"
                      : ""
                  }
                >
                  Melhor avaliação
                </option>

                <option
                  value="distance"
                  ${
                    state.sortOrder === "distance"
                      ? "selected"
                      : ""
                  }
                >
                  Mais próximos
                </option>

              </select>

            </div>

            <div
              aria-live="polite"
              style="
                margin-left:auto;
                color:var(--muted);
                font-size:.9rem;
                padding-bottom:10px;
              "
            >
              ${results.length}
              ${
                results.length === 1
                  ? "profissional encontrado"
                  : "profissionais encontrados"
              }
            </div>

          </div>

          <div id="results-content">

            ${
              results.length
                ? `
                  <div class="results-grid">
                    ${results
                      .map(renderProfessionalCard)
                      .join("")}
                  </div>
                `
                : renderEmptyState()
            }

          </div>

        </div>

      </section>
    `;

    document
      .getElementById("availability-filter")
      .addEventListener("change", (event) => {

        state.filters.availability =
          event.target.value;

        renderResults();

        showFeedback(
          "Filtro de disponibilidade aplicado."
        );
      });

    document
      .getElementById("sort-order")
      .addEventListener("change", (event) => {

        state.sortOrder =
          event.target.value;

        renderResults();

        showFeedback(
          "Ordenação atualizada."
        );
      });

    bindProfessionalActions();

    bindGlobalActions();
  }

  function resultHeading() {
    return `${capitalize(
      state.searchTerm
    )} em ${state.location}`;
  }

  // ============================================================
  // CARD DO PROFISSIONAL
  // ============================================================

  function renderProfessionalCard(professional) {
    return `
      <article class="pro-card">

        <div class="pro-top">

          <div
            class="avatar"
            aria-hidden="true"
          >
            ${escapeHtml(
              professional.initials
            )}
          </div>

          <div class="pro-title">

            <h3>
              ${escapeHtml(
                professional.name
              )}
            </h3>

            <p>
              ${escapeHtml(
                professional.profession
              )}
            </p>

            <div
              class="rating-row"
              aria-label="Avaliação ${
                professional.rating
              } de 5 com ${
                professional.reviews
              } avaliações"
            >

              <span
                class="stars"
                aria-hidden="true"
              >
                ${stars()}
              </span>

              <strong>
                ${professional.rating.toLocaleString(
                  "pt-BR",
                  {
                    minimumFractionDigits: 1
                  }
                )}
              </strong>

              <span class="rating-count">
                (${professional.reviews} avaliações)
              </span>

            </div>

          </div>

        </div>

        <div
          class="tags"
          aria-label="Especialidades"
        >

          ${professional.specialties
            .slice(0, 4)
            .map(
              (item) => `
                <span class="tag">
                  ${escapeHtml(item)}
                </span>
              `
            )
            .join("")}

        </div>

        <ul class="meta-list">

          <li>
            <span>Distância</span>
            <strong>
              ${formatDistance(
                professional.distance
              )}
            </strong>
          </li>

          <li>
            <span>Faixa de preço</span>
            <strong>
              ${escapeHtml(
                professional.price
              )}
            </strong>
          </li>

          <li>
            <span>Disponibilidade</span>

            <strong
              class="availability ${
                professional.availableToday
                  ? "available"
                  : "unavailable"
              }"
            >
              ${escapeHtml(
                professional.availability
              )}
            </strong>

          </li>

        </ul>

        <div class="card-actions">

          <button
            class="secondary-btn"
            type="button"
            data-profile-id="${
              professional.id
            }"
          >
            Ver perfil
          </button>

          <button
            class="primary-btn"
            type="button"
            data-quote-id="${
              professional.id
            }"
          >
            Solicitar orçamento
          </button>

        </div>

      </article>
    `;
  }

  // ============================================================
  // NENHUM RESULTADO
  // ============================================================

  function renderEmptyState() {
    return `
      <div
        class="empty-state"
        role="status"
      >

        <div
          class="empty-icon"
          aria-hidden="true"
        >
          ⌕
        </div>

        <h2>
          Nenhum profissional encontrado
        </h2>

        <p>
          Tente buscar outro serviço ou alterar a localização.
        </p>

        <button
          class="primary-btn"
          type="button"
          data-action="go-search"
        >
          Nova busca
        </button>

      </div>
    `;
  }

  // ============================================================
  // AÇÕES DOS CARDS
  // ============================================================

  function bindProfessionalActions() {
    document
      .querySelectorAll("[data-profile-id]")
      .forEach((button) => {

        button.addEventListener(
          "click",
          () => {

            selectProfessional(
              Number(
                button.dataset.profileId
              ),
              "profile"
            );
          }
        );
      });

    document
      .querySelectorAll("[data-quote-id]")
      .forEach((button) => {

        button.addEventListener(
          "click",
          () => {

            selectProfessional(
              Number(
                button.dataset.quoteId
              ),
              "quote"
            );
          }
        );
      });
  }

  function selectProfessional(
    id,
    destination = "profile"
  ) {
    const professional =
      professionals.find(
        (item) => item.id === id
      );

    if (!professional) {
      return;
    }

    state.selectedProfessional =
      professional;

    state.previousScreen =
      "results";

    if (destination === "quote") {

      state.selectedService =
        state.searchTerm ||
        professional.category;

      renderScreen("quote");

    } else {

      renderScreen("profile");
    }
  }

  // ============================================================
  // TELA DE PERFIL
  // ============================================================

  function renderProfile() {
    const professional =
      state.selectedProfessional;

    if (!professional) {
      renderScreen("results");
      return;
    }

    app.innerHTML = `
      <section
        class="page-section"
        aria-labelledby="profile-title"
      >

        <div class="container">

          <div class="breadcrumbs">

            <button
              type="button"
              data-action="go-results"
            >
              Profissionais encontrados
            </button>

            <span aria-hidden="true">
              ›
            </span>

            <span>
              Perfil
            </span>

          </div>

          <div class="profile-shell">

            <article class="profile-main">

              <header class="profile-hero">

                <div
                  class="avatar"
                  aria-hidden="true"
                >
                  ${escapeHtml(
                    professional.initials
                  )}
                </div>

                <div>

                  <p class="eyebrow">
                    Profissional local
                  </p>

                  <h1 id="profile-title">
                    ${escapeHtml(
                      professional.name
                    )}
                  </h1>

                  <p>
                    ${escapeHtml(
                      professional.profession
                    )}
                    ·
                    ${formatDistance(
                      professional.distance
                    )}
                  </p>

                  <div
                    class="rating-row"
                    aria-label="Avaliação ${
                      professional.rating
                    } de 5"
                  >

                    <span
                      class="stars"
                      aria-hidden="true"
                    >
                      ${stars()}
                    </span>

                    <strong>
                      ${professional.rating.toLocaleString(
                        "pt-BR",
                        {
                          minimumFractionDigits: 1
                        }
                      )}
                    </strong>

                    <span class="rating-count">
                      ${
                        professional.reviews
                      } avaliações
                    </span>

                  </div>

                </div>

              </header>

              <section
                class="profile-section"
                aria-labelledby="about-title"
              >

                <h2 id="about-title">
                  Sobre
                </h2>

                <p>
                  ${escapeHtml(
                    professional.about
                  )}
                </p>

              </section>

              <section
                class="profile-section"
                aria-labelledby="services-title"
              >

                <h2 id="services-title">
                  Serviços
                </h2>

                <div class="tags">

                  ${professional.specialties
                    .map(
                      (item) => `
                        <span class="tag">
                          ${escapeHtml(item)}
                        </span>
                      `
                    )
                    .join("")}

                </div>

              </section>

              <section
                class="profile-section"
                aria-labelledby="info-title"
              >

                <h2 id="info-title">
                  Informações
                </h2>

                <div class="info-grid">

                  <div class="info-item">
                    <span>Atendimento</span>
                    <strong>
                      Residencial
                    </strong>
                  </div>

                  <div class="info-item">
                    <span>Região</span>
                    <strong>
                      ${escapeHtml(
                        professional.serviceArea
                      )}
                    </strong>
                  </div>

                  <div class="info-item">
                    <span>Experiência</span>
                    <strong>
                      ${escapeHtml(
                        professional.experience
                      )}
                    </strong>
                  </div>

                  <div class="info-item">
                    <span>Disponibilidade</span>
                    <strong>
                      ${escapeHtml(
                        professional.availability
                      )}
                    </strong>
                  </div>

                </div>

              </section>

              <section
                class="profile-section"
                aria-labelledby="reviews-title"
              >

                <h2 id="reviews-title">
                  Avaliações
                </h2>

                ${professional.reviewsData
                  .map(
                    ([author, review]) => `
                      <article class="review">

                        <div class="review-author">
                          ${escapeHtml(author)}
                        </div>

                        <div
                          class="review-stars"
                          aria-label="5 de 5 estrelas"
                        >
                          ★★★★★
                        </div>

                        <p>
                          "${escapeHtml(review)}"
                        </p>

                      </article>
                    `
                  )
                  .join("")}

              </section>

            </article>

            <aside
              class="profile-side"
              aria-label="Solicitação de orçamento"
            >

              <h2 style="font-size:1.25rem;">
                Quer falar com
                ${escapeHtml(
                  professional.name.split(" ")[0]
                )}?
              </h2>

              <p style="color:var(--muted);">
                Envie os detalhes do serviço e
                solicite um orçamento.
              </p>

              <button
                class="primary-btn"
                type="button"
                data-action="request-quote"
                style="width:100%;margin-bottom:9px;"
              >
                Solicitar orçamento
              </button>

              <button
                class="secondary-btn"
                type="button"
                data-action="go-results"
                style="width:100%;"
              >
                Voltar para profissionais
              </button>

            </aside>

          </div>

        </div>

      </section>
    `;

    document
      .querySelector(
        '[data-action="request-quote"]'
      )
      .addEventListener("click", () => {

        state.selectedService =
          state.searchTerm ||
          professional.category;

        renderScreen("quote");
      });

    document
      .querySelectorAll(
        '[data-action="go-results"]'
      )
      .forEach((button) => {

        button.addEventListener(
          "click",
          () => renderScreen("results")
        );
      });
  }

  // ============================================================
  // FORMULÁRIO DE ORÇAMENTO
  // ============================================================

  function renderQuoteForm() {
    const professional =
      state.selectedProfessional;

    if (!professional) {
      renderScreen("results");
      return;
    }

    app.innerHTML = `
      <section
        class="page-section"
        aria-labelledby="quote-title"
      >

        <div class="container quote-layout">

          <div class="breadcrumbs">

            <button
              type="button"
              data-action="go-previous"
            >
              Voltar
            </button>

            <span aria-hidden="true">
              ›
            </span>

            <span>
              Solicitar orçamento
            </span>

          </div>

          <div class="quote-card">

            <div class="section-header">

              <p class="eyebrow">
                Próximo passo
              </p>

              <h1
                id="quote-title"
                style="
                  font-size:clamp(1.9rem,4vw,2.6rem);
                "
              >
                Solicitar orçamento
              </h1>

              <p>
                Conte um pouco sobre o serviço que você precisa.
              </p>

            </div>

            <div class="selected-summary">

              <div
                class="avatar"
                aria-hidden="true"
              >
                ${escapeHtml(
                  professional.initials
                )}
              </div>

              <div>

                <h2>
                  ${escapeHtml(
                    professional.name
                  )}
                </h2>

                <p>
                  ${escapeHtml(
                    professional.profession
                  )}
                  ·
                  ${escapeHtml(
                    professional.availability
                  )}
                </p>

              </div>

            </div>

            <form
              id="quote-form"
              novalidate
            >

              <div class="form-grid">

                <div
                  class="field"
                  id="quote-service-field"
                >

                  <label for="quote-service">
                    Serviço
                  </label>

                  <input
                    id="quote-service"
                    name="service"
                    type="text"
                    value="${escapeHtml(
                      state.selectedService ||
                      professional.category
                    )}"
                    required
                  >

                </div>

                <div
                  class="field"
                  id="quote-description-field"
                >

                  <label for="quote-description">
                    Descreva o que você precisa
                  </label>

                  <textarea
                    id="quote-description"
                    name="description"
                    required
                    placeholder="Explique o problema ou serviço que precisa realizar."
                  ></textarea>

                </div>

                <div
                  class="field"
                  id="quote-location-field"
                >

                  <label for="quote-location">
                    Localização
                  </label>

                  <input
                    id="quote-location"
                    name="location"
                    type="text"
                    value="${escapeHtml(
                      state.location
                    )}"
                    required
                    placeholder="Ex.: Rua das Flores, Centro"
                  >

                </div>

                <div class="form-grid two">

                  <div
                    class="field"
                    id="quote-date-field"
                  >

                    <label for="quote-date">
                      Data desejada
                    </label>

                    <input
                      id="quote-date"
                      name="date"
                      type="date"
                      required
                    >

                  </div>

                  <div class="field">

                    <label for="quote-period">
                      Período preferido
                    </label>

                    <select
                      id="quote-period"
                      name="period"
                    >

                      <option>
                        Manhã
                      </option>

                      <option>
                        Tarde
                      </option>

                      <option>
                        Noite
                      </option>

                      <option>
                        Flexível
                      </option>

                    </select>

                  </div>

                </div>

                <div class="field">

                  <label for="quote-photo">
                    Foto do problema (opcional)
                  </label>

                  <input
                    id="quote-photo"
                    name="photo"
                    type="file"
                    accept="image/*"
                  >

                  <span
                    style="
                      font-size:.84rem;
                      color:var(--muted);
                    "
                  >
                    A foto fica apenas no seu dispositivo neste MVP.
                  </span>

                </div>

              </div>

              <div
                id="quote-form-status"
                aria-live="polite"
              ></div>

              <div class="form-actions">

                <button
                  class="secondary-btn"
                  type="button"
                  data-action="go-previous"
                >
                  Voltar
                </button>

                <button
                  class="primary-btn"
                  type="submit"
                >
                  Enviar solicitação
                </button>

              </div>

            </form>

          </div>

        </div>

      </section>
    `;

    // Impede datas anteriores ao dia atual.

    const dateInput =
      document.getElementById("quote-date");

    const today = new Date();

    const year =
      today.getFullYear();

    const month =
      String(
        today.getMonth() + 1
      ).padStart(2, "0");

    const day =
      String(
        today.getDate()
      ).padStart(2, "0");

    dateInput.min =
      `${year}-${month}-${day}`;

    document
      .getElementById("quote-form")
      .addEventListener(
        "submit",
        handleQuoteSubmit
      );

    document
      .querySelectorAll(
        '[data-action="go-previous"]'
      )
      .forEach((button) => {

        button.addEventListener(
          "click",
          () => {

            renderScreen(
              state.previousScreen ||
              "results"
            );
          }
        );
      });
  }

  // ============================================================
  // ENVIO DO ORÇAMENTO
  // ============================================================

  function handleQuoteSubmit(event) {
    event.preventDefault();

    clearFormErrors("quote-form");

    const fields = {
      service:
        document.getElementById(
          "quote-service"
        ),

      description:
        document.getElementById(
          "quote-description"
        ),

      location:
        document.getElementById(
          "quote-location"
        ),

      date:
        document.getElementById(
          "quote-date"
        )
    };

    const errorMessages = {
      service:
        "Informe o serviço.",

      description:
        "Descreva o que você precisa.",

      location:
        "Informe a localização do serviço.",

      date:
        "Escolha uma data desejada."
    };

    let valid = true;

    Object.entries(fields)
      .forEach(
        ([key, input]) => {

          if (!input.value.trim()) {

            valid = false;

            setFieldError(
              input.parentElement.id,
              errorMessages[key],
              input.id
            );
          }
        }
      );

    if (!valid) {

      showFeedback(
        "Revise os campos obrigatórios antes de enviar.",
        "error"
      );

      document.getElementById(
        "quote-form-status"
      ).innerHTML = `
        <p
          class="error-text"
          role="alert"
        >
          Existem campos obrigatórios
          que precisam ser preenchidos.
        </p>
      `;

      return;
    }

    state.selectedService =
      fields.service.value.trim();

    renderScreen("confirmation");
  }

  // ============================================================
  // LIMPAR ERROS
  // ============================================================

  function clearFormErrors(formId) {
    const form =
      document.getElementById(formId);

    if (!form) {
      return;
    }

    form
      .querySelectorAll(".field.has-error")
      .forEach((element) => {

        element.classList.remove(
          "has-error"
        );

        const error =
          element.querySelector(
            ".error-text"
          );

        if (error) {
          error.remove();
        }
      });

    form
      .querySelectorAll(
        "[aria-invalid='true']"
      )
      .forEach((element) => {

        element.removeAttribute(
          "aria-invalid"
        );

        element.removeAttribute(
          "aria-describedby"
        );
      });
  }

  // ============================================================
  // TELA DE CONFIRMAÇÃO
  // ============================================================

  function renderConfirmation() {
    const professional =
      state.selectedProfessional;

    if (!professional) {
      renderScreen("results");
      return;
    }

    app.innerHTML = `
      <section
        class="page-section"
        aria-labelledby="confirmation-title"
      >

        <div class="container">

          <div class="confirmation">

            <div
              class="success-icon"
              aria-hidden="true"
            >
              ✓
            </div>

            <p class="eyebrow">
              Tudo certo
            </p>

            <h1 id="confirmation-title">
              Solicitação enviada!
            </h1>

            <p>
              Seu pedido de orçamento foi enviado para
              <strong>
                ${escapeHtml(
                  professional.name
                )}
              </strong>.
              Ele poderá entrar em contato para
              combinar os detalhes do serviço.
            </p>

            <div
              class="button-row"
              style="
                justify-content:center;
                margin-top:22px;
              "
            >

              <button
                class="primary-btn"
                type="button"
                data-action="go-results"
              >
                Voltar para profissionais
              </button>

              <button
                class="secondary-btn"
                type="button"
                data-action="go-search"
              >
                Nova busca
              </button>

            </div>

          </div>

        </div>

      </section>
    `;

    showFeedback(
      "Solicitação enviada com sucesso.",
      "success"
    );

    bindGlobalActions();
  }

  // ============================================================
  // AÇÕES GLOBAIS
  // ============================================================

  function bindGlobalActions() {
    document
      .querySelectorAll(
        '[data-action="go-search"]'
      )
      .forEach((button) => {

        button.addEventListener(
          "click",
          () => renderScreen("search")
        );
      });

    document
      .querySelectorAll(
        '[data-action="go-results"]'
      )
      .forEach((button) => {

        button.addEventListener(
          "click",
          () => renderScreen("results")
        );
      });
  }

  // ============================================================
  // INICIALIZAÇÃO
  // ============================================================

  window.ConectaPro = {
    state,
    professionals,
    renderScreen
  };

  renderScreen("search");

})();