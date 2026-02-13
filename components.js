function expertiseComponent() {
    const expertiseDiv = document.getElementById('expertiseDiv');

    const expertiseAreas = [
        'TypeScript',
        'React / Next.js',
        'Node.js',
        'Tailwind CSS',
        'MySQL',
        'UI/UX Design',
        'HTML',
        'CSS',
        'SASS',
        'PHP',
        'React Native'
    ];

    expertiseAreas.forEach(area => {
        const span = document.createElement('span');
        span.className = 'px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium border border-transparent hover:border-primary/30 transition-all cursor-default';
        span.textContent = area;
        expertiseDiv.appendChild(span);
    });
}

function professionalExperienceComponent() {
    const professionalExperienceDiv = document.getElementById('professionalExperience');
    const professionalExperienceEntriesDiv = document.getElementById('professionalExperienceEntries');
    const experiences = [
        {
            title: 'Auxiliar de Desenvolvimento',
            company: 'ATIVMOB - Inteligência Logística',
            duration: 'Out 2025 — Atual',
            responsibilities: [
                'Realizo integrações de sistemas utilizando PHP puro e MySQL, garantindo a comunicação eficiente entre diferentes plataformas de ERP e prestadores de serviços com entregas sob demanda.',
                'Desenvolvo e mantenho APIs para facilitar a troca de dados entre sistemas, assegurando a integridade e segurança das informações.',
                'Colaboro com a equipe de desenvolvimento para identificar e resolver problemas técnicos, contribuindo para a melhoria contínua dos sistemas e processos da empresa.',
                'Participo ativamente de reuniões de equipe e treinamentos para aprimorar minhas habilidades técnicas e contribuir para o crescimento da empresa.',
                'Participo do desenvolvimento de ferramentas internas para otimizar processos e melhorar a eficiência operacional, utilizando HTML, CSS e JavaScript para criar interfaces intuitivas e responsivas.'
            ]
        },
        {
            title: 'Estagiário Suporte Técnico',
            company: 'ATIVMOB - Inteligência Logística',
            duration: 'Mai 2025 — Out 2025',
            responsibilities: [
                'Realizei suporte técnico para clientes, realizando atendimento e resolução de problemas relacionados aos sistemas da empresa.',
                'Colaborei com a equipe de atendimento para garantir a satisfação do cliente e a resolução eficiente de problemas.',
                'Participei de treinamentos e reuniões para aprimorar meus conhecimentos técnicos e habilidades de atendimento ao cliente.'
            ]
        },
        {
            title: 'Desenvolvedor Web',
            company: 'Freelancer',
            duration: 'Jan 2025 — Mar 2025',
            responsibilities: [
                'Desenvolvi um site para ajudar uma comunidade dev a achar eventos de tecnologia.',
                'Otimizei o desempenho da aplicação e garanti a responsividade.',
                'Desenvolvi uma interface intuitiva e atraente.',
                'Fiz o desenvolvimento utilizando React, Next.js, TypeScript e Tailwind CSS.'
            ]
        }
    ];

    if (!professionalExperienceDiv || !professionalExperienceEntriesDiv) {
        return;
    }

    const entriesMarkup = experiences.map((exp, index) => {
        const isFirst = index === 0;
        const isLast = index === experiences.length - 1;
        const dotBorderClass = isFirst ? 'border-primary' : 'border-border-subtle';
        const spacingClass = isLast ? 'relative pl-10' : 'relative pl-10 pb-12';

        const responsibilitiesMarkup = exp.responsibilities.map(item => {
            return `
                  <li class="flex items-start gap-2">
                    <span
                      class="text-primary mt-1.5 size-1 rounded-full bg-primary flex-shrink-0"
                    ></span>
                    <span>${item}</span>
                  </li>`;
        }).join('');

        return `
            <div class="${spacingClass}">
              <div
                class="absolute left-0 top-1.5 size-3.5 rounded-full border-2 ${dotBorderClass} bg-bg-main z-10"
              ></div>
              <div class="flex flex-col gap-1">
                <h3 class="text-xl font-bold text-text-main">
                  ${exp.title}
                </h3>
                <div class="flex flex-wrap items-center gap-x-3 text-sm">
                  <span class="text-text-secondary font-medium">${exp.company}</span>
                  <span class="text-text-muted">•</span>
                  <span class="text-text-muted">${exp.duration}</span>
                </div>
                <ul
                  class="mt-4 space-y-2 text-text-secondary text-sm leading-relaxed max-w-2xl"
                >
                  ${responsibilitiesMarkup}
                </ul>
              </div>
            </div>`;
    }).join('');

    professionalExperienceEntriesDiv.innerHTML = entriesMarkup;
}

document.addEventListener('DOMContentLoaded', () => {
    expertiseComponent();
    professionalExperienceComponent();
});