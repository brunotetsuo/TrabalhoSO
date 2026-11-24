# Texto da apresentação — Dupla 1

Este arquivo reproduz o texto visível nos slides. Não há falas adicionais para decorar. Leia os parágrafos na ordem. As fontes são apenas para consulta.

Integrante 1: slides 1 a 6. Integrante 2: slides 7 a 12. Planejamento: 9min20s, incluindo pausas e trocas. A duração real depende do ritmo de leitura.

## 1. Ameaças e princípios da segurança

Integrante 1

Vamos apresentar o tema ameaças e princípios da segurança em sistemas operacionais.

Para começar, imaginem descobrir que informações sobre a saúde de vocês ficaram acessíveis a pessoas sem autorização. Mesmo que o sistema continue funcionando, isso já representa um problema de segurança.

Vamos explicar os conceitos e analisar um caso brasileiro: a exposição de dados do Ministério da Saúde em 2020. Depois, vamos relacionar a falha às medidas que poderiam evitar ou reduzir o problema.

## 2. Os três princípios da segurança

Integrante 1

Confidencialidade significa permitir o acesso à informação somente a pessoas autorizadas. Em um hospital, isso impede que qualquer pessoa leia o prontuário de um paciente.

Integridade significa proteger os dados contra alterações ou destruição indevidas. Por exemplo, se um professor registra a nota 8 no sistema da escola e alguém a muda para 10 sem autorização, a integridade dessa informação foi comprometida.

Disponibilidade significa manter dados e serviços acessíveis quando necessários. Por exemplo, o aluno precisa conseguir acessar suas notas no sistema da escola. Se o sistema ficar fora do ar, ele não consegue consultar as notas, mesmo que elas estejam corretas e protegidas.

## 3. Ameaça, vulnerabilidade e exploit

Integrante 1

Uma ameaça é uma situação ou ação com potencial para causar dano. O acesso indevido a informações pessoais é um exemplo de ameaça a um sistema.

Uma vulnerabilidade é uma fraqueza que pode ser explorada. Já um exploit é o código ou a técnica que aproveita essa fraqueza. Ter uma falha não significa que um ataque já aconteceu.

O risco considera a probabilidade de um evento e a gravidade de seu impacto. Uma interrupção em um hospital pode ser muito mais grave do que a mesma interrupção em um aplicativo de lazer.

## 4. Quem pode atacar?

Integrante 1

Os criminosos digitais podem buscar dinheiro por meio de extorsão ou venda de dados. Já grupos ligados a Estados podem atuar com objetivos de espionagem ou sabotagem.

Os hacktivistas agem por causas políticas ou ideológicas. Também existem agentes internos maliciosos, que abusam de acessos legítimos dentro da organização. Essas categorias podem se sobrepor.

Nem toda ameaça depende de um atacante. Erros humanos, falhas de equipamentos e falta de energia também podem prejudicar os dados e interromper serviços.

## 5. O papel do sistema operacional

Integrante 1

O sistema operacional gerencia arquivos, processos, memória e dispositivos. Por isso, ele participa diretamente da proteção das informações e do funcionamento dos serviços.

As permissões de acesso ajudam a impedir a leitura e a alteração indevidas de arquivos. O isolamento entre processos ajuda a limitar a interferência de um programa sobre os outros.

A proteção depende também das aplicações e das pessoas. Se alguém divulga uma senha válida, um terceiro pode conseguir acesso mesmo sem explorar uma falha do Windows ou do Linux. O caso que escolhemos mostra esse problema.

## 6. Dados de saúde expostos no Brasil

Integrante 1

Em novembro de 2020, veio a público a exposição de informações pessoais e médicas em sistemas do Ministério da Saúde usados no acompanhamento da Covid-19.

Um funcionário do Hospital Albert Einstein havia publicado usuários e senhas no GitHub, uma plataforma de compartilhamento de código. Essas credenciais permitiam acessar dados que deveriam permanecer restritos.

O problema envolveu informações de milhões de pessoas. Agora, o segundo integrante vai explicar como a exposição aconteceu, qual princípio foi afetado e quais medidas de proteção fazem sentido para esse caso.

## 7. A falha: credenciais publicadas

Integrante 2

A apuração registrada pela AGU e pela CGU identificou o manuseio indevido das credenciais. Logins e senhas de acesso a sistemas do Ministério da Saúde ficaram disponíveis na internet por aproximadamente um mês.

A fraqueza estava na proteção dessas credenciais. Quem tivesse acesso a elas poderia tentar entrar nos sistemas usando uma identidade autorizada. É como deixar a chave de uma sala restrita em um lugar público.

O mecanismo documentado foi a exposição de senhas válidas. As fontes não identificam um exploit específico nem uma falha do sistema operacional como causa. Uma vulnerabilidade também pode estar nos procedimentos de segurança.

## 8. O alcance e os limites da evidência

Integrante 2

Segundo a nota técnica da CGU, informações pessoais e médicas de cerca de 16 milhões de pacientes ficaram expostas entre 28 de outubro e 25 de novembro de 2020.

O documento registra acesso às informações por uma equipe jornalística. Isso demonstra que a exposição das credenciais permitiu ultrapassar a restrição de acesso aos dados.

É importante diferenciar exposição de cópia em massa: a base ficou acessível, mas isso não comprova que criminosos copiaram todos os registros. Golpes e uso indevido das informações são riscos possíveis, não danos individuais comprovados aqui.

## 9. Os princípios no caso brasileiro

Integrante 2

A confidencialidade foi o princípio diretamente comprometido, porque pessoas sem autorização puderam acessar informações pessoais e médicas.

A integridade seria afetada se alguém modificasse ou apagasse dados indevidamente. A disponibilidade seria afetada se o sistema ou suas informações deixassem de estar acessíveis quando necessários.

Nas fontes que usamos, não temos comprovação de alteração dos registros nem de paralisação causada por esse incidente. Portanto, o foco deste caso é a perda de sigilo. Nem todo incidente precisa atingir os três princípios ao mesmo tempo.

## 10. Proteção ligada à falha do caso

Integrante 2

Para evitar a exposição, senhas e chaves devem ficar fora do código compartilhado, em armazenamento protegido. A revisão dos arquivos e ferramentas de detecção de segredos ajudam a identificar publicações indevidas.

Se uma credencial vazar, é necessário revogá-la ou substituí-la. Apenas apagar o arquivo publicado não basta, porque alguém pode ter guardado uma cópia. Essa é uma medida para impedir novos acessos com a senha exposta.

O menor privilégio limita cada conta ao acesso necessário para sua tarefa e reduz o alcance de um comprometimento. Essas medidas são nossa proposta de proteção para a falha analisada, e não uma descrição do que foi implantado naquele momento.

## 11. Proteger os dados também é segurança

Integrante 2

Concluímos que a segurança precisa preservar a confidencialidade, a integridade e a disponibilidade. Um sistema continuar funcionando não significa que suas informações estejam protegidas.

O caso brasileiro mostra que a divulgação de credenciais pode comprometer o sigilo de dados sem depender de um malware. Por isso, proteger acessos e cuidar do manuseio das informações também faz parte da segurança.

A proteção depende do sistema operacional, das aplicações e dos procedimentos adotados pelas pessoas. Obrigado pela atenção! No próximo slide estão as fontes da nossa pesquisa.

## 12. Fontes da pesquisa

Integrante 2

Nossa pesquisa utilizou o NIST para os conceitos, a Agência Senado e documentos da CGU e da AGU para o caso brasileiro, além da documentação do GitHub para as medidas de proteção.



