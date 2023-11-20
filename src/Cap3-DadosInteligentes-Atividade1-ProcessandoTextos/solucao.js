
//Informações fornecidos pelo Gulliver

const html = "<html><head><title>Gulliver Traveller - Roteiros</title></head><body><b>->1 - Roteiros para *São Paulo*</b><br>A Terra da Garoa!<br>Fundada em 25 de janeiro de 1554, a cidade tem hoje cerca de 12 milhões de habitantes e é considerada o centro financeiro do Brasil. Aqui vão três dicas de roteiros obrigatórios para aqueles que passam pela capital paulista<br>#Roteiro A | Região: Avenida Paulista<br>MASP; Parque Trianon; Rua Augusta<br>#Roteiro B | Região: Centro<br>Catedral da Sé; Pátio do Colégio; Rua Augusta<br>#Roteiro C | Região: Vila Madalena<br>Beco do Batman; Feirinha da Benedito Calixto; Livraria da Vila<br> <b>->2 - Roteiros para *Las Vegas*</b><br>Viva Las Vegas!<br>     A cidade mais populosa e mais densamente povoada do estado de Nevada, Las Vegas foi fundada em 1905. É considerada oficialmente como uma cidade desde 1911 e conta com mais de meio milhão de habitantes. Venha conhecer a capital dos jogos de azar!<br>#Roteiro A | Região: Las Vegas Boulevard South<br>Fonte do Bellagio; Principais Cassinos; Madame Tussauds<br>#Roteiro B | Região: Downtown<br>; Fremont; Las Vegas Art Museum; Museu Nacional do Crime Organizado; <br>#Roteiro C | Região: Las Vegas Boulevard North<br>Outlet Premium North; Stratosphere; Apple Fashion Show<br><b>->3 - Roteiros para *Moscou*</b><br>Privet!<br>A capital russa fica situada às margens do Rio Moscou e, apesar de ser a cidade mais cosmopolita da Rússia, grande parte de sua história está preservada<br>#Roteiro A | Região: Praça Vermelha<br>Museu Histórico do Estado; Catedral de São Basílico; Mausoléu de Lênin<br>#Roteiro B | Região: Centro<br>Teatro Bolshoi; Monumento a Karl Marx; Rio Moscou<br>#Roteiro C | Região: Obras pela cidade<br>Metrô de Moscou; As Sete Irmãs; Moscow Leningradsky Railway Station  <br></body></html>";

// O nome das cidades avaliadas

var cidadeLista = html.split("*");
var cidadelUm = cidadeLista[1];
var cidadeDois = cidadeLista[3];
var cidadeTres = cidadeLista[5];

const cidades = cidadelUm + ", " + cidadeDois + ", " + cidadeTres;
document.write("<b>Cidade avaliadas:</b>" + "<br>");
document.write(cidades + "<br><br>");

// O conteúdo do roteiro A de cada cidade avaliada

var roteiroALista = html.split("#");
var avaliacaoUm = roteiroALista[1];
var avaliacaoDois = roteiroALista[4];
var avaliacaoTres = roteiroALista[7];

const roteiroA = avaliacaoUm + "<br>" + avaliacaoDois + "<br>" + avaliacaoTres;
document.write("<b>Roteiros A de cada cidade:</b>" + "<br>");
document.write(roteiroA + "<br>");

// Quantos locais são citados no roteiro A de cada cidade

var divisaoBr = avaliacaoUm.split("<br>");
var divisaoPonto = divisaoBr[1].split(";");
var quantidadeLocalUm = divisaoPonto.length;

var divisaoBr = avaliacaoDois.split("<br>");
var divisaoPonto = divisaoBr[1].split(";");
var quantidadeLocalDois = divisaoPonto.length;

var divisaoBr = avaliacaoTres.split("<br>");
var divisaoPonto = divisaoBr[1].split(";");
var quantidadeLocalTres = divisaoPonto.length;

const quantidadesLocais = quantidadeLocalUm + ", " + quantidadeLocalDois + ", " + quantidadeLocalTres
document.write("<b>Quantidade de locais citados em cada roteiro A:</b>" + "<br>");
document.write("Roteiro A São Paulo = " + quantidadeLocalUm + "<br>Roteiro A Las Vegas = " + quantidadeLocalDois + "<br>Roteiro A Moscou = " + quantidadeLocalTres + "<br><br>");

// O nome dos pontos turísticos localizados no bairro Centro da cidade de São Paulo

var centro = roteiroALista[2];
var pontosCentro = centro.split("<br>");

const pontosSP = pontosCentro[1];
document.write("<b>Pontos turísticos no bairro Centro de São Paulo:</b>" + "<br>");
document.write(pontosSP + "<br><br>");

// O nome dos pontos turísticos localizados no bairro Downtown da cidade de Los Angeles

var downtown = roteiroALista[4];
var pontosDowntown = downtown.split("<br>");

const pontosLA = pontosDowntown[1];
document.write("<b>Pontos turísticos no bairro Centro de Los Angeles:</b>" + "<br>");
document.write(pontosLA + "<br>");
