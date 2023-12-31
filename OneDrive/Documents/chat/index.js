const produtos = [
    { id: 1, nome: 'Maçã', preco: 2.99, imagem: 'maca.jpg', id_cooperativa: 1 },
    { id: 2, nome: 'Tomate', preco: 1.49, imagem: 'tomate.jpg', id_cooperativa: 2 },
    { id: 3, nome: 'Alface', preco: 0.99, imagem: 'alface.jpg', id_cooperativa: 3 },
    { id: 4, nome: 'Cenoura', preco: 1.25, imagem: 'cenoura.jpg', id_cooperativa: 4 },
    { id: 5, nome: 'Batata', preco: 1.99, imagem: 'batata.jpg', id_cooperativa: 5 },
    { id: 6, nome: 'Morango', preco: 3.49, imagem: 'morango.jpg', id_cooperativa: 1 },
    { id: 7, nome: 'Brocolis', preco: 2.29, imagem: 'brocolis.jpg', id_cooperativa: 2 },
    { id: 8, nome: 'Abóbora', preco: 2.99, imagem: 'abobora.jpg', id_cooperativa: 3 },
    { id: 9, nome: 'Cebola', preco: 1.75, imagem: 'cebola.jpg', id_cooperativa: 4 },
    { id: 10, nome: 'Melancia', preco: 4.99, imagem: 'melancia.jpg', id_cooperativa: 5 },
    { id: 11, nome: 'Pêssego', preco: 3.79, imagem: 'pessego.jpg', id_cooperativa: 1 },
    { id: 12, nome: 'Uva', preco: 5.99, imagem: 'uva.jpg', id_cooperativa: 2 },
    { id: 13, nome: 'Caju', preco: 3.49, imagem: 'caju.jpg', id_cooperativa: 3 },
    { id: 14, nome: 'Kiwi', preco: 2.99, imagem: 'kiwi.jpg', id_cooperativa: 4 },
    { id: 15, nome: 'Acelga', preco: 1.49, imagem: 'acelga.jpg', id_cooperativa: 5 },
    { id: 16, nome: 'Laranja', preco: 2.25, imagem: 'laranja.jpg', id_cooperativa: 1 },
    { id: 17, nome: 'Abacate', preco: 4.49, imagem: 'abacate.jpg', id_cooperativa: 2 },
    { id: 18, nome: 'Manga', preco: 3.99, imagem: 'manga.jpg', id_cooperativa: 3 },
    { id: 19, nome: 'Abacaxi', preco: 2.75, imagem: 'abacaxi.jpg', id_cooperativa: 4 },
    { id: 20, nome: 'Couve', preco: 1.99, imagem: 'couve.jpg', id_cooperativa: 5 },
    { id: 21, nome: 'Rúcula', preco: 2.49, imagem: 'rucula.jpg', id_cooperativa: 1 },
    { id: 22, nome: 'Pimentão', preco: 1.79, imagem: 'pimentao.jpg', id_cooperativa: 2 },
    { id: 23, nome: 'Espinafre', preco: 2.99, imagem: 'espinafre.jpg', id_cooperativa: 3 },
    { id: 24, nome: 'Mamão', preco: 3.25, imagem: 'mamao.jpg', id_cooperativa: 4 },
    { id: 25, nome: 'Berinjela', preco: 2.49, imagem: 'berinjela.jpg', id_cooperativa: 5 },
    { id: 26, nome: 'Coco', preco: 3.99, imagem: 'coco.jpg', id_cooperativa: 1 },
    { id: 27, nome: 'Cenoura', preco: 1.75, imagem: 'cenoura.jpg', id_cooperativa: 2 },
    { id: 28, nome: 'Pepino', preco: 1.99, imagem: 'pepino.jpg', id_cooperativa: 3 },
    { id: 29, nome: 'Pera', preco: 2.79, imagem: 'pera.jpg', id_cooperativa: 4 },
    { id: 30, nome: 'Aipo', preco: 1.49, imagem: 'aipo.jpg', id_cooperativa: 5 },
    { id: 31, nome: 'Limão', preco: 1.99, imagem: 'limao.jpg', id_cooperativa: 1 },
    { id: 32, nome: 'Couve-Flor', preco: 3.49, imagem: 'couveflor.jpg', id_cooperativa: 2 },
    { id: 33, nome: 'Amora', preco: 4.99, imagem: 'amora.jpg', id_cooperativa: 3 },
    { id: 34, nome: 'Goiaba', preco: 2.25, imagem: 'goiaba.jpg', id_cooperativa: 4 },
    { id: 35, nome: 'Beterraba', preco: 1.99, imagem: 'beterraba.jpg', id_cooperativa: 5 },
    { id: 36, nome: 'Figo', preco: 3.79, imagem: 'figo.jpg', id_cooperativa: 1 },
    { id: 37, nome: 'Ameixa', preco: 4.49, imagem: 'ameixa.jpg', id_cooperativa: 2 },
    { id: 38, nome: 'Cereja', preco: 5.99, imagem: 'cereja.jpg', id_cooperativa: 3 },
    { id: 39, nome: 'Nectarina', preco: 3.25, imagem: 'nectarina.jpg', id_cooperativa: 4 },
    { id: 40, nome: 'Limão Siciliano', preco: 2.49, imagem: 'limaosiciliano.jpg', id_cooperativa: 5 },
]



const products = [
    { id: 1, nome: 'Arroz', preco: 2.99, imagem: 'arroz.jpg', cooperativa: 'Luanda', id_categoria: 1 },
    { id: 2, nome: 'Trigo', preco: 3.49, imagem: 'trigo.jpg', cooperativa: 'Bengo', id_categoria: 1 },
    { id: 3, nome: 'Aveia', preco: 1.99, imagem: 'aveia.jpg', cooperativa: 'Huambo', id_categoria: 1 },
    { id: 4, nome: 'Quinoa', preco: 4.99, imagem: 'quinoa.jpg', cooperativa: 'Cunene', id_categoria: 1 },
    { id: 5, nome: 'Cevada', preco: 2.49, imagem: 'cevada.jpg', cooperativa: 'Malanje', id_categoria: 1 },
    { id: 6, nome: 'Milho', preco: 1.79, imagem: 'milho.jpg', cooperativa: 'Uíge', id_categoria: 1 },
    { id: 7, nome: 'Sorgo', preco: 3.29, imagem: 'sorgo.jpg', cooperativa: 'Namibe', id_categoria: 1 },
    { id: 8, nome: 'Centeio', preco: 2.89, imagem: 'centeio.jpg', cooperativa: 'Cabinda', id_categoria: 1 },
    { id: 9, nome: 'Farelo de trigo', preco: 1.59, imagem: 'farelo_trigo.jpg', cooperativa: 'Bié', id_categoria: 1 },
    { id: 10, nome: 'Farinha de milho', preco: 2.19, imagem: 'farinha_milho.jpg', cooperativa: 'Moxico', id_categoria: 1 },
    { id: 11, nome: 'Grão de Bico', preco: 2.49, imagem: 'g_bico.jpg', cooperativa: 'Luanda', id_categoria: 2 },
    { id: 12, nome: 'Lentilha', preco: 3.79, imagem: 'lentilha.jpg', cooperativa: 'Bengo', id_categoria: 2 },
    { id: 13, nome: 'Feijão Preto', preco: 2.99, imagem: 'feijao_preto.jpg', cooperativa: 'Huambo', id_categoria: 2 },
    { id: 14, nome: 'Feijão Vermelho', preco: 2.69, imagem: 'feijao_vermelho.jpg', cooperativa: 'Cunene', id_categoria: 2 },
    { id: 15, nome: 'Feijão Branco', preco: 3.29, imagem: 'feijao_branco.jpg', cooperativa: 'Malanje', id_categoria: 2 },
    { id: 16, nome: 'Amendoim', preco: 1.99, imagem: 'amendoim.jpg', cooperativa: 'Uíge', id_categoria: 2 },
    { id: 17, nome: 'Fava', preco: 2.89, imagem: 'fava.jpg', cooperativa: 'Namibe', id_categoria: 2 },
    { id: 18, nome: 'Soja', preco: 4.49, imagem: 'soja.jpg', cooperativa: 'Cabinda', id_categoria: 2 },
    { id: 19, nome: 'Azuki', preco: 3.19, imagem: 'azuki.jpg', cooperativa: 'Bié', id_categoria: 2 },
    { id: 20, nome: 'Chickpea', preco: 2.59, imagem: 'chickpea.jpg', cooperativa: 'Moxico', id_categoria: 2 },
    { id: 21, nome: 'Amêndoas', preco: 5.99, imagem: 'amendoas.jpg', cooperativa: 'Luanda', id_categoria: 3 },
    { id: 22, nome: 'Nozes', preco: 4.49, imagem: 'nozes.jpg', cooperativa: 'Bengo', id_categoria: 3 },
    { id: 23, nome: 'Castanha de Caju', preco: 3.99, imagem: 'castanha_caju.jpg', cooperativa: 'Huambo', id_categoria: 3 },
    { id: 24, nome: 'Castanha do Pará', preco: 6.29, imagem: 'castanha_para.jpg', cooperativa: 'Cunene', id_categoria: 3 },
    { id: 25, nome: 'Pistache', preco: 7.99, imagem: 'pistache.jpg', cooperativa: 'Malanje', id_categoria: 3 },
    { id: 26, nome: 'Semente de Abóbora', preco: 2.79, imagem: 'semente_abobora.jpg', cooperativa: 'Uíge', id_categoria: 3 },
    { id: 27, nome: 'Semente de Girassol', preco: 2.19, imagem: 'semente_girassol.jpg', cooperativa: 'Namibe', id_categoria: 3 },
    { id: 28, nome: 'Chia', preco: 3.49, imagem: 'chia.jpg', cooperativa: 'Cabinda', id_categoria: 3 },
    { id: 29, nome: 'Linhaça', preco: 1.99, imagem: 'linhaca.jpg', cooperativa: 'Bié', id_categoria: 3 },
    { id: 30, nome: 'Semente de Gergelim', preco: 2.89, imagem: 'gergelim.jpg', cooperativa: 'Moxico', id_categoria: 3 },
    { id: 31, nome: 'Aveia', preco: 3.99, imagem: 'aveia.jpg', cooperativa: 'Luanda', id_categoria: 4 },
    { id: 32, nome: 'Quinoa', preco: 5.49, imagem: 'quinoa.jpg', cooperativa: 'Bengo', id_categoria: 4 },
    { id: 33, nome: 'Chia', preco: 2.79, imagem: 'chia.jpg', cooperativa: 'Huambo', id_categoria: 4 },
    { id: 34, nome: 'Linhaça', preco: 2.19, imagem: 'linhaca.jpg', cooperativa: 'Cunene', id_categoria: 4 },
    { id: 35, nome: 'Semente de Abóbora', preco: 4.29, imagem: 'semente_abobora.jpg', cooperativa: 'Malanje', id_categoria: 4 },
    { id: 36, nome: 'Ameixa Seca', preco: 6.99, imagem: 'ameixa_seca.jpg', cooperativa: 'Uíge', id_categoria: 4 },
    { id: 37, nome: 'Coco Desidratado', preco: 3.49, imagem: 'coco_desidratado.jpg', cooperativa: 'Namibe', id_categoria: 4 },
    { id: 38, nome: 'Figo Seco', preco: 4.79, imagem: 'figo_seco.jpg', cooperativa: 'Cabinda', id_categoria: 4 },
    { id: 39, nome: 'Avelã', preco: 7.99, imagem: 'avela.jpg', cooperativa: 'Bié', id_categoria: 4 },
    { id: 40, nome: 'Pera Desidratada', preco: 5.29, imagem: 'pera_desidratada.jpg', cooperativa: 'Moxico', id_categoria: 4 },
    { id: 41, nome: 'Camomila', preco: 3.99, imagem: 'camomila.jpg', cooperativa: 'Luanda', id_categoria: 5 },
    { id: 42, nome: 'Hortelã', preco: 2.49, imagem: 'hortela.jpg', cooperativa: 'Bengo', id_categoria: 5 },
    { id: 43, nome: 'Lavanda', preco: 4.29, imagem: 'lavanda.jpg', cooperativa: 'Huambo', id_categoria: 5 },
    { id: 44, nome: 'Manjericão', preco: 3.79, imagem: 'manjericao.jpg', cooperativa: 'Cunene', id_categoria: 5 },
    { id: 45, nome: 'Sálvia', preco: 5.99, imagem: 'salvia.jpg', cooperativa: 'Malanje', id_categoria: 5 },
    { id: 46, nome: 'Eucalipto', preco: 4.49, imagem: 'eucalipto.jpg', cooperativa: 'Uíge', id_categoria: 5 },
    { id: 47, nome: 'Alecrim', preco: 3.19, imagem: 'alecrim.jpg', cooperativa: 'Namibe', id_categoria: 5 },
    { id: 48, nome: 'Gengibre', preco: 2.89, imagem: 'gengibre.jpg', cooperativa: 'Cabinda', id_categoria: 5 },
    { id: 49, nome: 'Erva-Cidreira', preco: 3.49, imagem: 'erva_cidreira.jpg', cooperativa: 'Bié', id_categoria: 5 },
    { id: 50, nome: 'Tomilho', preco: 4.79, imagem: 'tomilho.jpg', cooperativa: 'Moxico', id_categoria: 5 },
    { id: 51, nome: 'Amêndoas', preco: 5.99, imagem: 'amendoas.jpg', cooperativa: 'Luanda', id_categoria: 7 },
    { id: 52, nome: 'Nozes', preco: 4.49, imagem: 'nozes.jpg', cooperativa: 'Bengo', id_categoria: 7 },
    { id: 53, nome: 'Castanha de Caju', preco: 3.99, imagem: 'castanha_caju.jpg', cooperativa: 'Huambo', id_categoria: 7 },
    { id: 54, nome: 'Castanha do Pará', preco: 6.29, imagem: 'castanha_para.jpg', cooperativa: 'Cunene', id_categoria: 7 },
    { id: 55, nome: 'Pistache', preco: 7.99, imagem: 'pistache.jpg', cooperativa: 'Malanje', id_categoria: 7 },
    { id: 56, nome: 'Ameixa Seca', preco: 6.99, imagem: 'ameixa_seca.jpg', cooperativa: 'Uíge', id_categoria: 7 },
    { id: 57, nome: 'Coco Desidratado', preco: 3.49, imagem: 'coco_desidratado.jpg', cooperativa: 'Namibe', id_categoria: 7 },
    { id: 58, nome: 'Figo Seco', preco: 4.79, imagem: 'figo_seco.jpg', cooperativa: 'Cabinda', id_categoria: 7 },
    { id: 59, nome: 'Avelã', preco: 7.99, imagem: 'avela.jpg', cooperativa: 'Bié', id_categoria: 7 },
    { id: 60, nome: 'Pera Desidratada', preco: 5.29, imagem: 'pera_desidratada.jpg', cooperativa: 'Moxico', id_categoria: 7 },
    { id: 61, nome: 'Rosa', preco: 8.99, imagem: 'rosa.jpg', cooperativa: 'Luanda', id_categoria: 8 },
    { id: 62, nome: 'Orquídea', preco: 12.49, imagem: 'orquidea.jpg', cooperativa: 'Bengo', id_categoria: 8 },
    { id: 63, nome: 'Lírio', preco: 9.99, imagem: 'lirio.jpg', cooperativa: 'Huambo', id_categoria: 8 },
    { id: 64, nome: 'Girassol', preco: 7.29, imagem: 'girassol.jpg', cooperativa: 'Cunene', id_categoria: 8 },
    { id: 65, nome: 'Violeta', preco: 6.99, imagem: 'violeta.jpg', cooperativa: 'Malanje', id_categoria: 8 },
    { id: 66, nome: 'Bromélia', preco: 10.49, imagem: 'bromelia.jpg', cooperativa: 'Uíge', id_categoria: 8 },
    { id: 67, nome: 'Tulipa', preco: 8.19, imagem: 'tulipa.jpg', cooperativa: 'Namibe', id_categoria: 8 },
    { id: 68, nome: 'Hortênsia', preco: 11.89, imagem: 'hortensia.jpg', cooperativa: 'Cabinda', id_categoria: 8 },
    { id: 69, nome: 'Cravo', preco: 7.49, imagem: 'cravo.jpg', cooperativa: 'Bié', id_categoria: 8 },
    { id: 70, nome: 'Azaleia', preco: 9.79, imagem: 'azaleia.jpg', cooperativa: 'Moxico', id_categoria: 8 },
    { id: 71, nome: 'Manjericão', preco: 4.99, imagem: 'manjericao.jpg', cooperativa: 'Luanda', id_categoria: 9 },
    { id: 72, nome: 'Salsa', preco: 3.29, imagem: 'salsa.jpg', cooperativa: 'Bengo', id_categoria: 9 },
    { id: 73, nome: 'Cúrcuma', preco: 6.99, imagem: 'curcuma.jpg', cooperativa: 'Huambo', id_categoria: 9 },
    { id: 74, nome: 'Pimenta Preta', preco: 5.49, imagem: 'pimenta_preta.jpg', cooperativa: 'Cunene', id_categoria: 9 },
    { id: 75, nome: 'Gengibre', preco: 7.99, imagem: 'gengibre.jpg', cooperativa: 'Malanje', id_categoria: 9 },
    { id: 76, nome: 'Coentro', preco: 3.89, imagem: 'coentro.jpg', cooperativa: 'Uíge', id_categoria: 9 },
    { id: 77, nome: 'Açafrão', preco: 8.49, imagem: 'acafrão.jpg', cooperativa: 'Namibe', id_categoria: 9 },
    { id: 78, nome: 'Canela', preco: 4.79, imagem: 'canela.jpg', cooperativa: 'Cabinda', id_categoria: 9 },
    { id: 79, nome: 'Cravo-da-Índia', preco: 5.99, imagem: 'cravo_india.jpg', cooperativa: 'Bié', id_categoria: 9 },
    { id: 80, nome: 'Noz-Moscada', preco: 6.29, imagem: 'noz_moscada.jpg', cooperativa: 'Moxico', id_categoria: 9 },
    { id: 81, nome: 'Mel Puro', preco: 9.99, imagem: 'mel_puro.jpg', cooperativa: 'Luanda', id_categoria: 11 },
    { id: 82, nome: 'Própolis', preco: 7.49, imagem: 'propolis.jpg', cooperativa: 'Bengo', id_categoria: 11 },
    { id: 83, nome: 'Geleia Real', preco: 12.99, imagem: 'geleia_real.jpg', cooperativa: 'Huambo', id_categoria: 11 },
    { id: 84, nome: 'Pólen de Abelha', preco: 8.49, imagem: 'polen_abelha.jpg', cooperativa: 'Cunene', id_categoria: 11 },
    { id: 85, nome: 'Cera de Abelha', preco: 5.99, imagem: 'cera_abelha.jpg', cooperativa: 'Malanje', id_categoria: 11 },
    { id: 86, nome: 'Mel de Flores Silvestres', preco: 11.49, imagem: 'mel_silvestre.jpg', cooperativa: 'Uíge', id_categoria: 11 },
    { id: 87, nome: 'Mel de Eucalipto', preco: 10.29, imagem: 'mel_eucalipto.jpg', cooperativa: 'Namibe', id_categoria: 11 },
    { id: 88, nome: 'Mel de Laranjeira', preco: 11.79, imagem: 'mel_laranjeira.jpg', cooperativa: 'Cabinda', id_categoria: 11 },
    { id: 89, nome: 'Mel de Acácia', preco: 12.89, imagem: 'mel_acacia.jpg', cooperativa: 'Bié', id_categoria: 11 },
    { id: 90, nome: 'Favo de Mel', preco: 14.99, imagem: 'favo_mel.jpg', cooperativa: 'Moxico', id_categoria: 11 },
    { id: 91, nome: 'Carvalho', preco: 19.99, imagem: 'carvalho.jpg', cooperativa: 'Luanda', id_categoria: 12 },
    { id: 92, nome: 'Pinheiro', preco: 15.49, imagem: 'pinheiro.jpg', cooperativa: 'Bengo', id_categoria: 12 },
    { id: 93, nome: 'Cedro', preco: 21.99, imagem: 'cedro.jpg', cooperativa: 'Huambo', id_categoria: 12 },
    { id: 94, nome: 'Mogno', preco: 27.49, imagem: 'mogno.jpg', cooperativa: 'Cunene', id_categoria: 12 },
    { id: 95, nome: 'Freixo', preco: 18.99, imagem: 'freixo.jpg', cooperativa: 'Malanje', id_categoria: 12 },
    { id: 96, nome: 'Teixo', preco: 25.99, imagem: 'teixo.jpg', cooperativa: 'Uíge', id_categoria: 12 },
    { id: 97, nome: 'Ébano', preco: 29.99, imagem: 'ebano.jpg', cooperativa: 'Namibe', id_categoria: 12 },
    { id: 98, nome: 'Bambu', preco: 12.99, imagem: 'bambu.jpg', cooperativa: 'Cabinda', id_categoria: 12 },
    { id: 99, nome: 'Abeto', preco: 16.99, imagem: 'abeto.jpg', cooperativa: 'Bié', id_categoria: 12 },
    { id: 100, nome: 'Teca', preco: 23.99, imagem: 'teca.jpg', cooperativa: 'Moxico', id_categoria: 12 },
    { id: 101, nome: 'Aspargo', preco: 8.99, imagem: 'aspargo.jpg', cooperativa: 'Luanda', id_categoria: 13 },
    { id: 102, nome: 'Rabanete Roxo', preco: 4.49, imagem: 'rabanete_roxo.jpg', cooperativa: 'Bengo', id_categoria: 13 },
    { id: 103, nome: 'Aipo Nabo', preco: 6.99, imagem: 'aipo_nabo.jpg', cooperativa: 'Huambo', id_categoria: 13 },
    { id: 104, nome: 'Couve de Bruxelas', preco: 5.49, imagem: 'couve_bruxelas.jpg', cooperativa: 'Cunene', id_categoria: 13 },
    { id: 105, nome: 'Rúcula Selvagem', preco: 3.99, imagem: 'rucula_selvagem.jpg', cooperativa: 'Malanje', id_categoria: 13 },
    { id: 106, nome: 'Alcachofra', preco: 7.99, imagem: 'alcachofra.jpg', cooperativa: 'Uíge', id_categoria: 13 },
    { id: 107, nome: 'Agrião', preco: 4.29, imagem: 'agriao.jpg', cooperativa: 'Namibe', id_categoria: 13 },
    { id: 108, nome: 'Endívia', preco: 5.79, imagem: 'endivia.jpg', cooperativa: 'Cabinda', id_categoria: 13 },
    { id: 109, nome: 'Acelga', preco: 6.99, imagem: 'acelga.jpg', cooperativa: 'Bié', id_categoria: 13 },
    { id: 110, nome: 'Chicória', preco: 7.49, imagem: 'chicoria.jpg', cooperativa: 'Moxico', id_categoria: 13 },
    { id: 111, nome: 'Calêndula', preco: 9.99, imagem: 'calendula.jpg', cooperativa: 'Luanda', id_categoria: 14 },
    { id: 112, nome: 'Camomila', preco: 7.49, imagem: 'camomila.jpg', cooperativa: 'Bengo', id_categoria: 14 },
    { id: 113, nome: 'Erva-Cidreira', preco: 8.99, imagem: 'erva_cidreira.jpg', cooperativa: 'Huambo', id_categoria: 14 },
    { id: 114, nome: 'Gingko Biloba', preco: 12.49, imagem: 'gingko_biloba.jpg', cooperativa: 'Cunene', id_categoria: 14 },
    { id: 115, nome: 'Hortelã-Pimenta', preco: 10.99, imagem: 'hortela_pimenta.jpg', cooperativa: 'Malanje', id_categoria: 14 },
    { id: 116, nome: 'Valeriana', preco: 11.99, imagem: 'valeriana.jpg', cooperativa: 'Uíge', id_categoria: 14 },
    { id: 117, nome: 'Echinacea', preco: 14.29, imagem: 'echinacea.jpg', cooperativa: 'Namibe', id_categoria: 14 },
    { id: 118, nome: 'Ginseng', preco: 15.79, imagem: 'ginseng.jpg', cooperativa: 'Cabinda', id_categoria: 14 },
    { id: 119, nome: 'Alho', preco: 6.99, imagem: 'alho.jpg', cooperativa: 'Bié', id_categoria: 14 },
    { id: 120, nome: 'Alecrim', preco: 8.79, imagem: 'alecrim.jpg', cooperativa: 'Moxico', id_categoria: 14 },

]
const categorias = [
    {
        id: 1,
        categoria: "Grãos e Cereiais",
    },
    {
        id: 2,
        categoria: "Leguminosas",
    },
    {
        id: 3,
        categoria: "Oleoginosas",
    },
    {
        id: 4,
        categoria: "Fibras",
    },
    {
        id: 5,
        categoria: "Aromáticas e medicinais",
    },
    {
        id: 6,
        categoria: "Cana de Açucar",
    },
    {
        id: 7,
        categoria: "Frutos Secos",
    },
    {
        id: 8,
        categoria: "Flores e Plantas Ornamentais",
    },
    {
        id: 9,
        categoria: "Ervas e Especiarias",
    },
    {
        id: 10,
        categoria: "Vinhedos",
    },
    {
        id: 11,
        categoria: "Produtos Apícolas",
    },
    {
        id: 12,
        categoria: "Arvores de madeira",
    },
    {
        id: 13,
        categoria: "Horticultura Especializada",
    },
    {
        id: 14,
        categoria: "Plantas para fins Medicinais",
    }
]


function removerAcentosEspacos(palavra) {
    // Remove acentos
    const palavraSemAcentos = palavra.normalize("NFD").replace(/[\u0300-\u036f]/g, '');
  
    // Remove espaços
    const palavraSemEspacos = palavraSemAcentos.replace(/\s/g, '');
  
    return palavraSemEspacos;
  }
  
  // Exemplo de uso
  const palavraOriginal = 'áéí óú çãõ  espaço';
  const palavraProcessada = removerAcentosEspacos(palavraOriginal);
  
  console.log('Palavra Original:', palavraOriginal);
  console.log('Palavra Processada:', palavraProcessada);

  /**
   * Bengo
Benguela
Bié
Cabinda
Cuando Cubango
Cuanza Norte
Cuanza Sul
Cunene
Huambo
Huíla
Luanda
Lunda Norte
Lunda Sul
Malanje
Moxico
Namibe
Uíge
Zaire
   */