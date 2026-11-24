const sources = {
  "cia": [
    "NIST · Confidencialidade · consulta em 16/11/2026",
    "https://csrc.nist.gov/glossary/term/confidentiality"
  ],
  "risk": [
    "NIST · SP 800-30 rev. 1 · setembro/2012",
    "https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-30r1.pdf"
  ],
  "senado": [
    "Agência Senado · Exposição de dados de saúde · 26/11/2020",
    "https://www12.senado.leg.br/noticias/materias/2020/11/26/humberto-costa-quer-que-pgr-investigue-vazamento-de-dados-do-ministerio-da-saude"
  ],
  "cgu": [
    "CGU · Nota Técnica 2943/2021 · 2021",
    "https://basedeconhecimento.cgu.gov.br/server/api/core/bitstreams/496c3f4c-5627-46b9-94fb-cbcc9f595835/content"
  ],
  "agu": [
    "AGU/CGU · Parecer 00026/2022 · 2022",
    "https://basedeconhecimento.cgu.gov.br/server/api/core/bitstreams/e4ffa6af-be17-4094-87ff-dc9b30332134/content"
  ],
  "secrets": [
    "GitHub Docs · Remoção de credenciais expostas · consulta em 23/11/2026",
    "https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository"
  ],
  "least": [
    "NIST · Menor privilégio · consulta em 23/11/2026",
    "https://csrc.nist.gov/glossary/term/least_privilege"
  ]
};
const link = (key) => `<a href="${sources[key][1]}" target="_blank" rel="noopener noreferrer">${sources[key][0]}</a>`;
const cite = (...keys) => `<div class="source">${keys.map(link).join(' &nbsp; / &nbsp; ')}</div>`;
const slideData = [
  {
    "title": "Ameaças e princípios da segurança",
    "section": "Abertura",
    "person": 1,
    "time": 35,
    "refs": [],
    "paragraphs": [
      "Vamos apresentar o tema <strong>ameaças e princípios da segurança</strong> em sistemas operacionais.",
      "Para começar, imaginem descobrir que informações sobre a saúde de vocês ficaram acessíveis a pessoas sem autorização. Mesmo que o sistema continue funcionando, isso já representa um problema de segurança.",
      "Vamos explicar os conceitos e analisar um caso brasileiro: a <strong>exposição de dados do Ministério da Saúde em 2020</strong>. Depois, vamos relacionar a falha às medidas que poderiam evitar ou reduzir o problema."
    ],
    "dark": false
  },
  {
    "title": "Os três princípios da segurança",
    "section": "Conceitos",
    "person": 1,
    "time": 55,
    "refs": [
      "cia"
    ],
    "paragraphs": [
      "<strong>Confidencialidade</strong> significa permitir o acesso à informação somente a pessoas autorizadas. Em um hospital, isso impede que qualquer pessoa leia o prontuário de um paciente.",
      "<strong>Integridade</strong> significa proteger os dados contra alterações ou destruição indevidas. Por exemplo, se um professor registra a nota 8 no sistema da escola e alguém a muda para 10 sem autorização, a integridade dessa informação foi comprometida.",
      "<strong>Disponibilidade</strong> significa manter dados e serviços acessíveis quando necessários. Por exemplo, o aluno precisa conseguir acessar suas notas no sistema da escola. Se o sistema ficar fora do ar, ele não consegue consultar as notas, mesmo que elas estejam corretas e protegidas."
    ],
    "dark": false
  },
  {
    "title": "Ameaça, vulnerabilidade e exploit",
    "section": "Conceitos",
    "person": 1,
    "time": 55,
    "refs": [
      "risk"
    ],
    "paragraphs": [
      "Uma <strong>ameaça</strong> é uma situação ou ação com potencial para causar dano. O acesso indevido a informações pessoais é um exemplo de ameaça a um sistema.",
      "Uma <strong>vulnerabilidade</strong> é uma fraqueza que pode ser explorada. Já um <strong>exploit</strong> é o código ou a técnica que aproveita essa fraqueza. Ter uma falha não significa que um ataque já aconteceu.",
      "O <strong>risco</strong> considera a probabilidade de um evento e a gravidade de seu impacto. Uma interrupção em um hospital pode ser muito mais grave do que a mesma interrupção em um aplicativo de lazer."
    ],
    "dark": false
  },
  {
    "title": "Quem pode atacar?",
    "section": "Tipos de atacantes",
    "person": 1,
    "time": 50,
    "refs": [
      "risk"
    ],
    "paragraphs": [
      "Os <strong>criminosos digitais</strong> podem buscar dinheiro por meio de extorsão ou venda de dados. Já grupos ligados a Estados podem atuar com objetivos de espionagem ou sabotagem.",
      "Os <strong>hacktivistas</strong> agem por causas políticas ou ideológicas. Também existem agentes internos maliciosos, que abusam de acessos legítimos dentro da organização. Essas categorias podem se sobrepor.",
      "Nem toda ameaça depende de um atacante. Erros humanos, falhas de equipamentos e falta de energia também podem prejudicar os dados e interromper serviços."
    ],
    "dark": false
  },
  {
    "title": "O papel do sistema operacional",
    "section": "Ligação com a disciplina",
    "person": 1,
    "time": 45,
    "refs": [],
    "paragraphs": [
      "O sistema operacional gerencia arquivos, processos, memória e dispositivos. Por isso, ele participa diretamente da proteção das informações e do funcionamento dos serviços.",
      "As <strong>permissões de acesso</strong> ajudam a impedir a leitura e a alteração indevidas de arquivos. O isolamento entre processos ajuda a limitar a interferência de um programa sobre os outros.",
      "A proteção depende também das aplicações e das pessoas. Se alguém divulga uma senha válida, um terceiro pode conseguir acesso mesmo sem explorar uma falha do Windows ou do Linux. O caso que escolhemos mostra esse problema."
    ],
    "dark": false
  },
  {
    "title": "Dados de saúde expostos no Brasil",
    "section": "Caso real",
    "person": 1,
    "time": 50,
    "refs": [
      "senado"
    ],
    "paragraphs": [
      "Em <strong>novembro de 2020</strong>, veio a público a exposição de informações pessoais e médicas em sistemas do Ministério da Saúde usados no acompanhamento da Covid-19.",
      "Um funcionário do Hospital Albert Einstein havia publicado <strong>usuários e senhas no GitHub</strong>, uma plataforma de compartilhamento de código. Essas credenciais permitiam acessar dados que deveriam permanecer restritos.",
      "O problema envolveu informações de milhões de pessoas. Agora, o segundo integrante vai explicar como a exposição aconteceu, qual princípio foi afetado e quais medidas de proteção fazem sentido para esse caso."
    ],
    "dark": true
  },
  {
    "title": "A falha: credenciais publicadas",
    "section": "Falha explorada",
    "person": 2,
    "time": 60,
    "refs": [
      "agu"
    ],
    "paragraphs": [
      "A apuração registrada pela AGU e pela CGU identificou o <strong>manuseio indevido das credenciais</strong>. Logins e senhas de acesso a sistemas do Ministério da Saúde ficaram disponíveis na internet por aproximadamente um mês.",
      "A fraqueza estava na proteção dessas credenciais. Quem tivesse acesso a elas poderia tentar entrar nos sistemas usando uma identidade autorizada. É como deixar a chave de uma sala restrita em um lugar público.",
      "O mecanismo documentado foi a exposição de senhas válidas. As fontes não identificam um exploit específico nem uma falha do sistema operacional como causa. Uma vulnerabilidade também pode estar nos procedimentos de segurança."
    ],
    "dark": false
  },
  {
    "title": "O alcance e os limites da evidência",
    "section": "Danos documentados",
    "person": 2,
    "time": 45,
    "refs": [
      "cgu"
    ],
    "paragraphs": [
      "Segundo a nota técnica da CGU, informações pessoais e médicas de cerca de <strong>16 milhões de pacientes</strong> ficaram expostas entre <strong>28 de outubro e 25 de novembro de 2020</strong>.",
      "O documento registra acesso às informações por uma equipe jornalística. Isso demonstra que a exposição das credenciais permitiu ultrapassar a restrição de acesso aos dados.",
      "É importante diferenciar exposição de cópia em massa: a base ficou acessível, mas isso não comprova que criminosos copiaram todos os registros. Golpes e uso indevido das informações são riscos possíveis, não danos individuais comprovados aqui."
    ],
    "dark": false
  },
  {
    "title": "Os princípios no caso brasileiro",
    "section": "Análise do caso",
    "person": 2,
    "time": 50,
    "refs": [
      "cia",
      "cgu"
    ],
    "paragraphs": [
      "A <strong>confidencialidade</strong> foi o princípio diretamente comprometido, porque pessoas sem autorização puderam acessar informações pessoais e médicas.",
      "A <strong>integridade</strong> seria afetada se alguém modificasse ou apagasse dados indevidamente. A <strong>disponibilidade</strong> seria afetada se o sistema ou suas informações deixassem de estar acessíveis quando necessários.",
      "Nas fontes que usamos, não temos comprovação de alteração dos registros nem de paralisação causada por esse incidente. Portanto, o foco deste caso é a perda de sigilo. Nem todo incidente precisa atingir os três princípios ao mesmo tempo."
    ],
    "dark": false
  },
  {
    "title": "Proteção ligada à falha do caso",
    "section": "Medidas de proteção",
    "person": 2,
    "time": 60,
    "refs": [
      "secrets",
      "least"
    ],
    "paragraphs": [
      "Para evitar a exposição, senhas e chaves devem ficar <strong>fora do código compartilhado</strong>, em armazenamento protegido. A revisão dos arquivos e ferramentas de detecção de segredos ajudam a identificar publicações indevidas.",
      "Se uma credencial vazar, é necessário <strong>revogá-la ou substituí-la</strong>. Apenas apagar o arquivo publicado não basta, porque alguém pode ter guardado uma cópia. Essa é uma medida para impedir novos acessos com a senha exposta.",
      "O <strong>menor privilégio</strong> limita cada conta ao acesso necessário para sua tarefa e reduz o alcance de um comprometimento. Essas medidas são nossa proposta de proteção para a falha analisada, e não uma descrição do que foi implantado naquele momento."
    ],
    "dark": false
  },
  {
    "title": "Proteger os dados também é segurança",
    "section": "Conclusão",
    "person": 2,
    "time": 40,
    "refs": [],
    "paragraphs": [
      "Concluímos que a segurança precisa preservar a <strong>confidencialidade, a integridade e a disponibilidade</strong>. Um sistema continuar funcionando não significa que suas informações estejam protegidas.",
      "O caso brasileiro mostra que a divulgação de credenciais pode comprometer o sigilo de dados sem depender de um malware. Por isso, proteger acessos e cuidar do manuseio das informações também faz parte da segurança.",
      "A proteção depende do sistema operacional, das aplicações e dos procedimentos adotados pelas pessoas. Obrigado pela atenção! No próximo slide estão as fontes da nossa pesquisa."
    ],
    "dark": true
  },
  {
    "title": "Fontes da pesquisa",
    "section": "Referências",
    "person": 2,
    "time": 15,
    "refs": [],
    "paragraphs": [
      "Nossa pesquisa utilizou o NIST para os conceitos, a Agência Senado e documentos da CGU e da AGU para o caso brasileiro, além da documentação do GitHub para as medidas de proteção."
    ],
    "dark": false
  }
];
const slides = slideData.map((s,i)=>({...s,notes:s.paragraphs.map(p=>p.replace(/<[^>]+>/g,'')).join('\n\n'),html: `<div class="reading-head"><span class="eyebrow">${s.section}</span></div><h2>${s.title}</h2><div class="reading-copy">${s.paragraphs.map(p=>'<p>'+p+'</p>').join('')}</div>${i===11?'<div class="reading-refs">'+Object.keys(sources).map(k=>'<div>'+link(k)+'</div>').join('')+'<div><a href="https://csrc.nist.gov/glossary/term/integrity" target="_blank" rel="noopener">NIST · Integridade</a> / <a href="https://csrc.nist.gov/glossary/term/availability" target="_blank" rel="noopener">Disponibilidade</a></div></div>':cite(...s.refs)}` }));
const deck=document.querySelector('#deck');
deck.innerHTML=slides.map((s,i)=>`<section class="slide" id="slide-${i+1}" aria-label="${i+1}. ${s.title}" aria-hidden="true">${s.html}</section>`).join('');
let current=0;
const $=s=>document.querySelector(s);
const fmt=s=>`${String(Math.floor(s/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`;
function show(index){current=Math.max(0,Math.min(slides.length-1,index));document.querySelectorAll('.slide').forEach((el,i)=>{el.classList.toggle('active',i===current);el.setAttribute('aria-hidden',i!==current);el.inert=i!==current});document.body.classList.toggle('dark',!!slides[current].dark);$('#count').textContent=`${String(current+1).padStart(2,'0')} / ${slides.length}`;$('#sectionName').textContent=slides[current].section;$('#progressBar').style.width=`${(current+1)/slides.length*100}%`;$('#prev').disabled=current===0;$('#next').disabled=current===slides.length-1;$('#announcement').textContent=`Slide ${current+1}: ${slides[current].title}`;history.replaceState(null,'',`#${current+1}`);window.scrollTo(0,0)}
$('#prev').onclick=()=>show(current-1);$('#next').onclick=()=>show(current+1);
async function fullscreen(){try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen()}catch{$('#announcement').textContent='Use F11 no navegador para ativar a tela cheia.'}}
$('#fullscreen').onclick=fullscreen;
$('#slideGrid').innerHTML=slides.map((s,i)=>`<button data-slide="${i}"><small>${String(i+1).padStart(2,'0')} · ${fmt(s.time)}</small>${s.title}</button>`).join('');
$('#overviewBtn').onclick=()=>$('#overview').showModal();$('#closeOverview').onclick=()=>$('#overview').close();
$('#slideGrid').onclick=e=>{const b=e.target.closest('[data-slide]');if(b){show(Number(b.dataset.slide));$('#overview').close()}};
document.addEventListener('keydown',e=>{if(e.ctrlKey||e.metaKey||e.altKey||/INPUT|TEXTAREA|SELECT/.test(e.target.tagName)||e.target.isContentEditable)return;if($('#overview').open)return;if(e.code==='Space'&&e.target.closest('button,a'))return;const key=e.key.toLowerCase();if(['arrowright','arrowdown','pagedown',' '].includes(key)){e.preventDefault();show(current+1)}else if(['arrowleft','arrowup','pageup'].includes(key)){e.preventDefault();show(current-1)}else if(key==='home'){e.preventDefault();show(0)}else if(key==='end'){e.preventDefault();show(slides.length-1)}else if(key==='f')fullscreen();else if(key==='g')$('#overview').showModal();});
window.addEventListener('hashchange',()=>show((Number(location.hash.slice(1))||1)-1));show((Number(location.hash.slice(1))||1)-1);






