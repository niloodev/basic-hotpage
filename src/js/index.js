$('.drop').click(()=>{
    if($('.header_Foot').attr('off') != undefined && $('.header_Foot').attr('off') != false){
        // ON
        $('.header_Foot').removeAttr('off');
    } else {
        // OFF
        $('.header_Foot').attr('off','off');
    }
});
var st = {
    blue: 0,
    pink: 1,
    green: 2,
    yellow: 3
}
var ct = {
    blue: "    <img class='mainImage' src='./src/img/blue.jpeg'>    <div class='mainColor'></div>    <div class='mainContent'>        <div class='mainTitle'>            História <div class='linha'></div>        </div>        <div class='mainCurva'>            O Carnaval é uma tradicional festa popular realizada em diferentes locais do mundo, sendo a mais celebrada no Brasil. Apesar do forte secularismo presente no Carnaval, a festa é tradicionalmente ligada ao catolicismo, uma vez que sua celebração antecede a Quaresma. O Carnaval não é uma invenção brasileira, pois sua origem remonta à Antiguidade.            A palavra Carnaval é originária do latim, carnis levale, cujo significado é “retirar a carne”. Esse sentido está relacionado ao jejum que deveria ser realizado durante a Quaresma e também ao controle dos prazeres mundanos. Isso demonstra uma tentativa da Igreja Católica de controlar os desejos dos fiéis.        </div>        <div class='mainCurva' style='margin-top: 15px;'>            A história do Carnaval no Brasil iniciou-se no período colonial. Uma das primeiras manifestações carnavalescas foi o entrudo, uma brincadeira de origem portuguesa que, na colônia, era praticada pelos escravos. Nela, as pessoas saíam às ruas sujando umas às outras jogando lama, urina etc. O entrudo foi proibido em 1841, mas continuou até meados do século XX.        </div>    </div>",
    pink: "     <img pink class='mainImage' src='./src/img/pink.jpg'>    <div pink class='mainColor'></div>    <div pink class='mainContent'>        <div class='mainTitle'>            Blocos <div class='linha'></div>        </div>        <div class='mainCurva'>            Blocos de carnaval são conjuntos de pessoas que vão as ruas na época do Carnaval (durante, antes ou pouco depois do evento) de forma mais ou menos organizada. Geralmente, os blocos carnavalescos percorrem trajetos urbanos definidos (ruas e avenidas principais das cidades). São populares e muito tradicionais no carnaval brasileiro. Também são conhecidos popularmente por blocos de rua. Geralmente são acompanhados por banda com instrumentos de percussão.        </div>        <div class='mainCurva' style='margin-top: 15px;'>            Os blocos são animados por bandas, carros de som ou trios elétricos. Seus integrantes saem vestindo roupas da mesma cor ou fantasias carnavalescas, dependendo do tipo de bloco. No Nordeste, são comuns a participação de bonecos grandes (bonecões) nos desfiles de alguns blocos, principalmente na cidade de Olinda (PE).        </div>    </div>",
    green: "    <img green class='mainImage' src='./src/img/green.jpg'>    <div green class='mainColor'></div>    <div green class='mainContent'>        <div class='mainTitle'>            Fantasias <div class='linha'></div>        </div>        <div class='mainCurva'>            A partir de 1870 as fantasias de carnaval tiveram grande importância para a festa, pois foi a forma que os foliões encontraram para dar um ar mais divertido ao carnaval.        </div>        <div class='mainCurva' style='margin-top: 15px;'>            Até 1930 as fantasias eram simples, com roupas adaptadas, tingidas, enfeitadas de forma ingênua, pois os materiais que poderiam enriquecê-las, como os tecidos, ornamentos, sapatilhas, adereços de cabeça, eram muito caros, aparecendo mais nos desfiles de escolas de samba. Nos clubes e desfiles de rua, surgiram os blocos, onde um grupo de pessoas vestia-se igual.        </div>        <div class='mainCurva' style='margin-top: 15px'>            Alguns disfarces tornaram-se mais famosos, como caveira, odalisca, médico, morcego, malandro, super-heróis, diabo, príncipe, bobo da corte, pierrô, colombina, vedete, palhaço.        </div>    </div>",
    yellow: "    <img yellow class='mainImage' src='./src/img/yellow.jpg'>    <div yellow class='mainColor'></div>    <div yellow class='mainContent'>        <div class='mainTitle'>            Curiosidades <div class='linha'></div>        </div>        <div class='mainCurva'>            <c style='color: rgb(246, 195, 25)'>1. </c> A Quarta-feira de Cinzas marca o fim definitivo do Carnaval no Brasil e o início da Quaresma. Ela tem esse nome porque havia o costume de se marcar a testa dos fieis com as cinzas de uma fogueira em sinal de penitência que horror, gente.        </div>        <div class='mainCurva' style='margin-top: 20px;'>            <c style='color: rgb(246, 195, 25)'>2. </c> Os desfiles das escolas de samba sempre trazem uma ala que homenageia as mulheres baianas, com seus vestidos brancos de saia longa e rodada. O costume relembra as senhoras que abrigavam os sambistas quando esses ainda eram marginalizados pela sociedade.        </div>        <div class='mainCurva' style='margin-top: 20px;'>            <c style='color: rgb(246, 195, 25)'>3. </c> A primeira música reconhecida como marcha de carnaval foi “Abre Alas”, composta pela pianista e regente Chiquinha Gonzaga, em 1889, para o cordão carnavalesco Rosa de Ouro.        </div>        <div class='mainCurva' style='margin-top: 20px;'>            <c style='color: rgb(246, 195, 25)'>4. </c> A primeira escola de samba do Brasil foi a 'Deixa Falar', criada no bairro do Estácio, no Rio de Janeiro, em 1928, por Nilton Basto, Ismael Silva, Silvio Fernandes, Oswaldo Vasques, Edgar, Julinho, Aurélio, entre outros.        </div>        <div class='mainCurva' style='margin-top: 20px;'>            <c style='color: rgb(246, 195, 25)'>5. </c> Os blocos de rua brasileiros surgiram na segunda metade do século XIX e contavam com a participação de membros das elites urbanas. Neles desfilavam pessoas fantasiadas, carros decorados e bandas musicais. O primeiro bloco de carnaval do Brasil foi o 'Congresso das Sumidades Carnavalescas', fundado no Rio de Janeiro, em 1855. O mais curioso é que um dos seus fundadores foi o escritor José de Alencar.        </div>    </div>",
}

var status = st.blue;
$('.mainContainer').html(ct.blue);

function goPink(){
    if(status == st.pink) return;

    $.when(
        $('.mainImage').animate({
            opacity: 0
        }, 500),
        $('.mainColor').animate({
            right: '-100%',
        }, 400),
        $('.mainContent').animate({
            left: '-100%',
        }, 200)
    ).then(()=>{
        $.when($('.mainContainer').animate({
            opacity: 0,
        }, 10)).then(()=>{
            $('.mainContainer').html(ct.pink);
            $.when(
                $('.mainImage').animate({
                    opacity: 0
                }, 1),
                $('.mainColor').animate({
                    right: '-100%',
                }, 1),
                $('.mainContent').animate({
                    left: '-100%',
                }, 1)
            ).then(()=>{
                $('.mainContainer').animate({
                    opacity: 1,
                }, 1);
                $('.mainImage').animate({
                    opacity: 0.4
                }, 600);
                $('.mainColor').animate({
                    right: '0px',
                }, 800);
                $('.mainContent').animate({
                    left: '0px',
                }, 1200);
                status = st.pink;
            });
        });
    });
}

function goBlue(){
    if(status == st.blue) return;

    $.when(
        $('.mainImage').animate({
            opacity: 0
        }, 600),
        $('.mainColor').animate({
            right: '-100%',
        }, 800),
        $('.mainContent').animate({
            left: '-100%',
        }, 1200)
    ).then(()=>{
        $.when($('.mainContainer').animate({
            opacity: 0,
        }, 10)).then(()=>{
            $('.mainContainer').html(ct.blue);
            $.when(
                $('.mainImage').animate({
                    opacity: 0
                }, 1),
                $('.mainColor').animate({
                    right: '-100%',
                }, 1),
                $('.mainContent').animate({
                    left: '-100%',
                }, 1)
            ).then(()=>{
                $('.mainContainer').animate({
                    opacity: 1,
                }, 1);
                $('.mainImage').animate({
                    opacity: 0.4
                }, 600);
                $('.mainColor').animate({
                    right: '0px',
                }, 800);
                $('.mainContent').animate({
                    left: '0px',
                }, 1200);
                status = st.blue;
            });
        });
    });
}

function goGreen(){
    if(status == st.green) return;

    $.when(
        $('.mainImage').animate({
            opacity: 0
        }, 600),
        $('.mainColor').animate({
            right: '-100%',
        }, 800),
        $('.mainContent').animate({
            left: '-100%',
        }, 1200)
    ).then(()=>{
        $.when($('.mainContainer').animate({
            opacity: 0,
        }, 10)).then(()=>{
            $('.mainContainer').html(ct.green);
            $.when(
                $('.mainImage').animate({
                    opacity: 0
                }, 1),
                $('.mainColor').animate({
                    right: '-100%',
                }, 1),
                $('.mainContent').animate({
                    left: '-100%',
                }, 1)
            ).then(()=>{
                $('.mainContainer').animate({
                    opacity: 1,
                }, 1);
                $('.mainImage').animate({
                    opacity: 0.4
                }, 600);
                $('.mainColor').animate({
                    right: '0px',
                }, 800);
                $('.mainContent').animate({
                    left: '0px',
                }, 1200);
                status = st.green;
            });
        });
    });
}

function goYellow(){
    if(status == st.yellow) return;

    $.when(
        $('.mainImage').animate({
            opacity: 0
        }, 600),
        $('.mainColor').animate({
            right: '-100%',
        }, 800),
        $('.mainContent').animate({
            left: '-100%',
        }, 1200)
    ).then(()=>{
        $.when($('.mainContainer').animate({
            opacity: 0,
        }, 10)).then(()=>{
            $('.mainContainer').html(ct.yellow);
            $.when(
                $('.mainImage').animate({
                    opacity: 0
                }, 1),
                $('.mainColor').animate({
                    right: '-100%',
                }, 1),
                $('.mainContent').animate({
                    left: '-100%',
                }, 1)
            ).then(()=>{
                $('.mainContainer').animate({
                    opacity: 1,
                }, 1);
                $('.mainImage').animate({
                    opacity: 0.4
                }, 600);
                $('.mainColor').animate({
                    right: '0px',
                }, 800);
                $('.mainContent').animate({
                    left: '0px',
                }, 1200);
                status = st.yellow;
            });
        });
    });
}