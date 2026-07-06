const atividades = [
    { titulo: "ATIVIDADE_1806", arquivo: "atividades/atividade_1806.pdf" },
    { titulo: "ATIVIDADE_2506", arquivo: "atividades/atividade_2506.pdf" },
    { titulo: "ATIVIDADE_2606", arquivo: "atividades/atividade_2606.pdf" },
    { titulo: "ATIVIDADE_0207", arquivo: "atividades/atividade_0207.pdf" },
    { titulo: "ATIVIDADE_0307", arquivo: "atividades/atividade_0307.pdf" }
];

const bancoDadosAlunos = {
  "ALICE EMANUELLA": ["ATIVIDADE_0307"],
  "ALICE MARIA": ["ATIVIDADE_2506", "ATIVIDADE_0207", "ATIVIDADE_0307"],
  "ANA KARLA": ["ATIVIDADE_0307"],
  "ANTONIO JOSE": ["ATIVIDADE_1806", "ATIVIDADE_2506", "ATIVIDADE_2606", "ATIVIDADE_0207", "ATIVIDADE_0307"],
  "CARLOS GABRIEL": ["ATIVIDADE_1806", "ATIVIDADE_2506", "ATIVIDADE_2606", "ATIVIDADE_0207", "ATIVIDADE_0307"],
  "CLAYTON ERICK": ["ATIVIDADE_1806", "ATIVIDADE_2506", "ATIVIDADE_2606", "ATIVIDADE_0207", "ATIVIDADE_0307"],
  "DIEGO DA SILVA": ["ATIVIDADE_1806", "ATIVIDADE_2506", "ATIVIDADE_2606", "ATIVIDADE_0207", "ATIVIDADE_0307"],
  "ENIO GABRIEL": ["ATIVIDADE_1806", "ATIVIDADE_2506", "ATIVIDADE_2606", "ATIVIDADE_0207", "ATIVIDADE_0307"],
  "ENZO RAPHAEL": ["ATIVIDADE_1806", "ATIVIDADE_2506", "ATIVIDADE_2606", "ATIVIDADE_0207", "ATIVIDADE_0307"],
  "FELIPE BRANDAO": ["ATIVIDADE_1806", "ATIVIDADE_2506", "ATIVIDADE_0207", "ATIVIDADE_0307"],
  "FRANCISCO CARICIOL": ["ATIVIDADE_1806", "ATIVIDADE_2506", "ATIVIDADE_2606", "ATIVIDADE_0207", "ATIVIDADE_0307"],
  "GABRIEL DA CRUZ": ["ATIVIDADE_0307"],
  "GABRIEL RODRIGUES": ["ATIVIDADE_1806", "ATIVIDADE_2506", "ATIVIDADE_2606", "ATIVIDADE_0207", "ATIVIDADE_0307"],
  "GUILHERME VILARINHO": ["ATIVIDADE_1806", "ATIVIDADE_2506", "ATIVIDADE_2606", "ATIVIDADE_0207", "ATIVIDADE_0307"],
  "ISAIAS OLIVEIRA": ["ATIVIDADE_0307"],
  "JOAO HEMANUEL": ["ATIVIDADE_1806", "ATIVIDADE_2506", "ATIVIDADE_2606", "ATIVIDADE_0207", "ATIVIDADE_0307"],
  "JOAO PEDRO": ["ATIVIDADE_2506", "ATIVIDADE_2606", "ATIVIDADE_0207", "ATIVIDADE_0307"],
  "JOSE HENRIQUE": ["ATIVIDADE_1806", "ATIVIDADE_2506", "ATIVIDADE_2606", "ATIVIDADE_0207", "ATIVIDADE_0307"],
  "JOSE LUCAS": ["ATIVIDADE_1806", "ATIVIDADE_0207", "ATIVIDADE_0307"],
  "JOSEILSON BARCELAR": ["ATIVIDADE_1806", "ATIVIDADE_2506", "ATIVIDADE_2606", "ATIVIDADE_0207", "ATIVIDADE_0307"],
  "KAILAN ARAUJO": ["ATIVIDADE_1806", "ATIVIDADE_2506", "ATIVIDADE_2606", "ATIVIDADE_0207", "ATIVIDADE_0307"],
  "LARISSA MAIRA": ["ATIVIDADE_2506", "ATIVIDADE_2606", "ATIVIDADE_0307"],
  "LUIS EDUARDO": ["ATIVIDADE_2506", "ATIVIDADE_2606", "ATIVIDADE_0207", "ATIVIDADE_0307"],
  "LUIZ AUGUSTO": ["ATIVIDADE_1806", "ATIVIDADE_2606", "ATIVIDADE_0207", "ATIVIDADE_0307"],
  "MAITE GOMES": ["ATIVIDADE_0307"],
  "MARIA CLARA": ["ATIVIDADE_0307"],
  "MARIA EDUARDA": ["ATIVIDADE_2506", "ATIVIDADE_2606", "ATIVIDADE_0207", "ATIVIDADE_0307"],
  "MARIA EVELLYN": ["ATIVIDADE_0307"],
  "MATEUS JOSE": ["ATIVIDADE_1806", "ATIVIDADE_2506", "ATIVIDADE_0207", "ATIVIDADE_0307"],
  "MAYCON WESLLY": ["ATIVIDADE_1806", "ATIVIDADE_0207", "ATIVIDADE_0307"],
  "RIQUELME MENDES": ["ATIVIDADE_1806", "ATIVIDADE_2506", "ATIVIDADE_0207", "ATIVIDADE_0307"],
  "TIAGO DA CRUZ": ["ATIVIDADE_0207", "ATIVIDADE_0307"],
  "WELSON FAGNER": ["ATIVIDADE_1806", "ATIVIDADE_2506", "ATIVIDADE_2606", "ATIVIDADE_0207", "ATIVIDADE_0307"],
  "YASMIM RODRIGUES": ["ATIVIDADE_2506", "ATIVIDADE_0307"]
};

function buscarTrabalhos(nomeInput) {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    document.getElementById('nome-exibido').innerText = nomeInput;

    const listaDiv = document.getElementById('lista-trabalhos');
    listaDiv.innerHTML = "";

    if (bancoDadosAlunos.hasOwnProperty(nomeInput)) {
        const titulosPendentes = bancoDadosAlunos[nomeInput];

        if (titulosPendentes.length === 0) {
            listaDiv.innerHTML = "<p class='no-tasks'>Você não tem trabalhos pendentes. 🎉</p>";
        } else {
            const ul = document.createElement('ul');

            titulosPendentes.forEach(tituloPendente => {
                const li = document.createElement('li');
                
                const dadosAtividade = atividades.find(act => act.titulo === tituloPendente);

                if (dadosAtividade) {
                    const link = document.createElement('a');
                    link.href = dadosAtividade.arquivo;
                    link.target = "_blank";
                    link.innerText = `📄 ${dadosAtividade.titulo}`;
                    link.className = "link-atividade";
                    li.appendChild(link);
                } else {
                    li.innerText = `⚠️ ${tituloPendente} (Arquivo PDF não mapeado no sistema)`;
                }

                ul.appendChild(li);
            });

            listaDiv.appendChild(ul);
        }
    } else {
        listaDiv.innerHTML = "<p style='color: red;'>Erro: Aluno não mapeado no banco de dados.</p>";
    }

    document.getElementById('tela-login').classList.add('hidden');
    document.getElementById('tela-resultado').classList.remove('hidden');
}

function voltar() {
    document.getElementById('tela-login').classList.remove('hidden');
    document.getElementById('tela-resultado').classList.add('hidden');
}