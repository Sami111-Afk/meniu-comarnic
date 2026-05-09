const menuData = [
    {
        id: "ciorbe", category: "CIORBE / SOUP",
        items: [
            { ro: "CIORBĂ DE LEGUME", en: "Vegetable soup", w: "400g", p: "21 lei", img: "img/ciorba_legume.jpg" },
            { ro: "CIORBĂ DE VĂCUȚĂ", en: "Beef soup", w: "360/40g", p: "26 lei", img: "img/ciorba_vacuta.jpg" },
            { ro: "SUPĂ DE PUI CU TĂIȚEI", en: "Chicken noodle soup", w: "340/20/40g", p: "26 lei", img: "img/supa_pui_taitei.jpg" },
            { ro: "CIORBĂ DE BURTĂ", en: "Tripe soup", w: "300/100g", p: "28 lei", al_ro: "Conține alergeni: lactoză, țelină, ouă. Produs parțial din produs decongelat.", al_en: "Contains allergens: lactose, celery, eggs. Partially produced from thawed product.", img: "img/ciorba_burta.jpg" },
            { ro: "CIORBĂ DE FASOLE CU AFUMĂTURĂ", en: "Smoked bean soup", w: "350/50/100g", p: "26 lei", al_ro: "Conține alergeni: gluten, țelină", al_en: "Contains allergens: gluten, celery", img: "img/ciorba_fasole_afumatura.jpg" },
            { ro: "SUPĂ CREMĂ DE LEGUME CU CRUTOANE", en: "Vegetable cream soup with croutons", w: "360/50g", p: "21 lei", al_ro: "Conține alergeni: lactoză, ouă, țelină", al_en: "Contains allergens: lactose, celery, eggs", img: "img/supa_crema_legume.jpg" },
            { ro: "CIORBĂ DE PERIȘOARE A LA GREC", en: "Greek-style fennel soup", w: "300/100g", p: "26 lei", al_ro: "Conține alergeni: lactoză, ouă, țelină", al_en: "Contains allergens: lactose, celery, eggs", img: "img/ciorba_perisoare.jpg" },
            { ro: "CIORBĂ DE PUI A LA GREC", en: "Greek-style chicken soup", w: "300/100g", p: "26 lei", al_ro: "Conține alergeni: ouă, gluten, lactoză, țelină", al_en: "Contains allergens: eggs, gluten, lactose, celery", img: "img/ciorba_pui_grec.jpg" }
        ]
    },
    {
        id: "snitele", category: "ȘNIȚELE / SCHNITZEL",
        items: [
            { ro: "ȘNIȚEL DE PUI ÎN FULGI", en: "Flaked chicken schnitzel", w: "180g", p: "47 lei", img: "img/snitel_pui_fulgi.jpg" },
            { ro: "ȘNIȚEL DE PUI PANE", en: "Breaded chicken schnitzel", w: "180g", p: "47 lei", img: "img/snitel_pui_pane.jpg" },
            { ro: "ȘNIȚEL DE PUI ÎN SUSAN", en: "Chicken schnitzel in sesame", w: "180g", p: "47 lei", img: "img/snitel_pui_susan.jpg" },
            { ro: "ȘNIȚEL DE PORC PANE", en: "Breaded pork schnitzel", w: "180g", p: "47 lei", img: "img/snitel_porc_pane.jpg" },
            { ro: "ȘNIȚEL DE PUI PARIZIAN", en: "Parisian Chicken Schnitzel", w: "180g", p: "47 lei", img: "img/snitel_pui_parizian.jpg" },
            { ro: "ȘNIȚEL DE PORC PARIZIAN", en: "Parisian Pork Schnitzel", w: "180g", p: "47 lei", img: "img/snitel_porc_parizian.jpg" },
            { ro: "ȘNIȚEL ÎN CRUSTĂ DE PESMET CU CIUPERCI ȘI SOS DE SMÂNTÂNĂ", en: "Schnitzel in breadcrumb crust with mushrooms and sour cream sauce", w: "300g", p: "52 lei", d_ro: "Piept de pui, ou, făină, pesmet, ciuperci, smântână", d_en: "Chicken breast, egg, flour, breadcrumbs, mushrooms, sour cream", img: "img/snitel_crusta_pesmet.jpg" },
            { ro: "ȘNIȚEL PALERMO", en: "Palermo schnitzel", w: "200g", p: "53 lei", d_ro: "Piept pui, cașcaval, ou", d_en: "Chicken breast, cheese, egg", img: "img/snitel_palermo.jpg" },
            { ro: "ȘNIȚEL A LA TOMATEN", en: "A la Tomaten schnitzel", w: "280g", p: "84 lei", d_ro: "Mușchi vită, roșii, busuioc, ulei măsline, ou, făină, pesmet", d_en: "Beef tenderloin, tomatoes, basil, olive oil, egg, flour, breadcrumbs", img: "img/snitel_tomaten.jpg" }
        ]
    },
    {
        id: "gratar", category: "GRĂTAR / GRILL",
        items: [
            { ro: "COTLET DE PORC LA GRĂTAR", en: "Grilled pork chop", w: "180g", p: "47 lei", img: "img/cotlet_porc_gratar.jpg" },
            { ro: "MUȘCHI DE PORC LA GRĂTAR", en: "Grilled pork loin", w: "180g", p: "50 lei", img: "img/muschi_porc_gratar.jpg" },
            { ro: "CÂRNAȚI LA GRĂTAR", en: "Grilled sausages", w: "200g", p: "47 lei", img: "img/carnati_gratar.jpg" },
            { ro: "MUȘCHI DE VITĂ LA GRĂTAR", en: "Grilled beef tenderloin", w: "180g", p: "74 lei", img: "img/muschi_vita_gratar.jpg" },
            { ro: "MITITEI CU MUȘTAR", en: "Grilled minced meat rolls with mustard", w: "100g", p: "6 lei/buc", img: "img/mititei_mustar.jpg" },
            { ro: "PULPE DE PUI DEZOSATE LA GRĂTAR", en: "Grilled boneless chicken legs", w: "180g", p: "47 lei", img: "img/pulpe_pui_gratar.jpg" },
            { ro: "PIEPT DE PUI LA GRĂTAR", en: "Grilled chicken breast", w: "200g", p: "47 lei", img: "img/piept_pui_gratar.jpg" },
            { ro: "CEAFĂ DE PORC LA GRĂTAR", en: "Grilled pork neck", w: "180g", p: "49 lei", img: "img/ceafa_porc_gratar.jpg" }
        ]
    },
    {
        id: "peste", category: "PEȘTE / FISH",
        items: [
            { ro: "SOMON LA GRĂTAR CU LĂMÂIE", en: "Grilled salmon with lemon", w: "200/100g", p: "63 lei", img: "img/somon.jpg" },
            { ro: "PĂSTRĂV GRILL", en: "Grill trout", w: "250g", p: "53 lei", img: "img/pastrav_grill.jpg" },
            { ro: "PĂSTRĂV ȚĂRĂNESC", en: "Peasant trout", w: "300g", p: "63 lei", img: "img/pastrav_taranesc.jpg" }
        ]
    },
    {
        id: "traditionale", category: "PREPARATE TRADIȚIONALE / TRADITIONAL DISHES",
        items: [
            { ro: "CARNE DE PORC LA GARNIȚĂ CU MĂMĂLIGUȚĂ ȘI MURĂTURI", en: "Pork garnished with polenta and pickles", w: "180/100/200g", p: "79 lei", img: "img/carne_porc_garnita.jpg" },
            { ro: "PASTRAMĂ DE OAIE CU MĂMĂLIGUȚĂ", en: "Mutton pastrami with polenta", w: "180/180g", p: "60 lei", img: "img/pastrama_oaie.jpg" },
            { ro: "GULAȘ DE VITĂ", en: "Beef goulash", w: "200/200/180/100g", p: "77 lei", d_ro: "Pulpă vită, găluști, mămăliguță", d_en: "Beef leg, dumplings, polenta", img: "img/gulas_vita.jpg" },
            { ro: "MUȘCHI DE VITĂ STROGANOFF", en: "Beef Stroganoff", w: "180/150g", p: "77 lei", d_ro: "Mușchi vită, sos brun, smântână, ciuperci", d_en: "Beef tenderloin, brown sauce, sour cream, mushrooms", img: "img/muschi_vita_stroganoff.jpg" },
            { ro: "CORDON BLEU", en: "Pork, ham, cheese", w: "", p: "56 lei", d_ro: "Mușchi de porc, șuncă, cașcaval", img: "img/cordon_bleu.jpg" },
            { ro: "CIOCĂNELE LA CUPTOR CU CARTOFI SOTE", en: "Baked ham with sauteed potatoes", w: "180/200g", p: "60 lei", img: "img/ciocanele_cuptor.jpg" },
            { ro: "PIEPT DE PUI CU SOS GORGONZOLA", en: "Chicken breast with gorgonzola sauce", w: "180/150g", p: "63 lei", img: "img/piept_pui_gorgonzola.jpg" },
            { ro: "ESCALOP DE PUI CU CIUPERCI", en: "Chicken escalope with mushrooms", w: "180/100/50g", p: "47 lei", img: "img/escalop_pui.jpg" },
            { ro: "CAȘCAVAL PANE", en: "Breaded cheese", w: "200g", p: "42 lei", img: "img/cascaval_pane.jpg" },
            { ro: "POMANA PORCULUI CU MĂMĂLIGUȚĂ", en: "Pork alms with polenta", w: "200/50/180g", p: "47 lei", img: "img/pomana_porcului.jpg" },
            { ro: "TOCHITURA DE PORC CU MĂMĂLIGĂ, OU ȘI BRÂNZĂ RASĂ", en: "Pork stew whit polenta, egg and grated cheese", w: "150/100/50/200g", p: "53 lei", img: "img/tochitura_porc.jpg" },
            { ro: "FICĂȚEI DE PUI", en: "Chicken livers", w: "200g", p: "41 lei", al_ro: "Produs parțial din produs congelat / Partially frozen product", img: "img/ficatei_pui.jpg" },
            { ro: "IAHNIE DE FASOLE CU AFUMĂTURĂ", en: "Baked beans & Smoked pork", w: "400/150g", p: "51 lei", img: "img/iahnie_fasole.jpg" },
            { ro: "VARZĂ CĂLITĂ CU AFUMĂTURĂ", en: "Braised cabbage&smoked meat", w: "300/150g", p: "39 lei", img: "img/varza_calita.jpg" },
            { ro: "MĂMĂLIGUȚĂ CU BRÂNZĂ ȘI SMÂNTÂNĂ", en: "Polenta with cheese and sour cream", w: "180/100/100/50g", p: "45 lei", img: "img/mamaliguta_branza.jpg" }
        ]
    },
    {
        id: "paste", category: "PASTE / PASTA",
        items: [
            { ro: "PASTE CARBONARA", en: "Carbonara pasta", w: "150/200g", p: "47 lei", img: "img/paste_carbonara.jpg" },
            { ro: "TAGLIATELE CU GORGONZOLA ȘI PIEPT DE PUI", en: "Tagliatelle with gorgonzola and chicken breast", w: "150/150g", p: "58 lei", img: "img/tagliatele_gorgonzola.jpg" },
            { ro: "SPAGHETTI BOLOGNESE", en: "", w: "400g", p: "47 lei", d_ro: "Spaghete cu carne, sos bolognese, parmezan", d_en: "Spaghetti with meat, bolognese sauce, parmesan", img: "img/spaghetti_bolognese.jpg" },
            { ro: "SPAGHETTI AGLIO OLIO E PEPERONCINO", en: "", w: "", p: "37 lei", d_ro: "Spaghete, ulei măsline, usturoi, peperoncini, pătrunjel", d_en: "Spaghetti, olive oil, garlic, pepperoncini, parsley", img: "img/spaghetti_aglio_olio.jpg" },
            { ro: "SPAGHETTI AL PESTO/LINGUINI", en: "", w: "400g", p: "37 lei", d_ro: "Spaghete, sos pesto, parmezan", d_en: "Spaghetti, pesto sauce, parmesan", img: "img/spaghetti_pesto.jpg" },
            { ro: "SPAGHETTI A LA MATRICIANA", en: "", w: "400g", p: "37 lei", d_ro: "Spaghete, ceapă, bacon, sos roșii, busuioc", d_en: "Spaghetti, onion, bacon, tomato sauce, basil", img: "img/spaghetti_matriciana.jpg" },
            { ro: "SPAGHETTI PRIMAVERA", en: "", w: "400g", p: "42 lei", d_ro: "Spaghete, dovlecei, vânătă, roșii cherry, ciuperci, sos roșii, busuioc, fulgi chilli", d_en: "Spaghetti, zucchini, eggplant, cherry tomatoes, mushrooms, tomato sauce, basil, chilliflakes", img: "img/spaghetti_primavera.jpg" },
            { ro: "SPAGHETTI AL FREDO", en: "", w: "400g", p: "53 lei", d_ro: "Spaghete, piept pui, ciuperci, smântână, busuioc, parmezan", d_en: "Spaghetti, chicken breast, mushrooms, cream, basil, parmesan", img: "img/spaghetti_al_fredo.jpg" },
            { ro: "PASTE MILANEZE", en: "Milanese pasta", w: "150/200g", p: "42 lei", img: "img/paste_milaneze.jpg" }
        ]
    },
    {
        id: "pizza", category: "PIZZA / PIZZA",
        items: [
            { ro: "PIZZA MARGHERITA", d_ro: "Cașcaval, mozzarella, sos roșii", d_en: "Cheese, mozzarella, tomato sauce", img: "img/pizza_margherita.jpg", sizes: [ {s:"MEDIE/Medium 400g", p:"37 lei"}, {s:"MARE/Large 800g", p:"74 lei"} ]},
            { ro: "PIZZA CASEI", en: "House Pizza", d_ro: "Mozzarella, cașcaval, sos roșii, bacon, piept pui, ciuperci, măsline", d_en: "Mozzarella, cheese, tomato sauce, bacon, chicken breast, mushrooms, olives", img: "img/pizza_casei.jpg", sizes: [ {s:"MEDIE/Medium 450g", p:"37 lei"}, {s:"MARE/Large 900g", p:"74 lei"} ]},
            { ro: "PIZZA PROSCIUTTO E FUNGHI", d_ro: "Cașcaval, mozzarella, sos roșii, șuncă presată, ciuperci", d_en: "Cheese, mozzarella, tomato sauce, pressed ham, mushrooms", img: "img/pizza_prosciutto_funghi.jpg", sizes: [ {s:"MEDIE/Medium 420g", p:"37 lei"}, {s:"MARE/Large 840g", p:"74 lei"} ]},
            { ro: "PIZZA PROSCIUTTO COTTO", d_ro: "Cașcaval, mozzarella, sos roșii, șunca presată", d_en: "Cheese, mozzarella, tomato sauce, pressed ham", img: "img/pizza_prosciutto_cotto.jpg", sizes: [ {s:"MEDIE/Medium 420g", p:"37 lei"}, {s:"MARE/Large 840g", p:"74 lei"} ]},
            { ro: "PIZZA DIAVALO", d_ro: "Cașcaval, mozzarella, sos roșii, piept pui, brânză telemea, ardei iute, salam picant", d_en: "Cheese, mozzarella, tomato sauce, chicken breast, telemea cheese, hot peppers, spicy salami", img: "img/pizza_diavalo.jpg", sizes: [ {s:"MEDIE/Medium 450g", p:"37 lei"}, {s:"MARE/Large 900g", p:"74 lei"} ]},
            { ro: "PIZZA SALAMI PICANTĂ", en: "Spicy salami pizza", d_ro: "Cașcaval, mozzarella, sos roșii, salam chorizo, ardei iute", d_en: "Cheese, mozzarella, tomato sauce, chorizo salami, hot peppers", img: "img/pizza_salami.jpg", sizes: [ {s:"MEDIE/Medium 420g", p:"37 lei"}, {s:"MARE/Large 840g", p:"74 lei"} ]},
            { ro: "PIZZA CALZONE", d_ro: "Cașcaval, mozzarella, sos roși, șuncă, ciuperci", d_en: "Cheese, mozzarella, tomato sauce, ham, mushrooms", img: "img/pizza_calzone.jpg", sizes: [ {s:"MEDIE/Medium 400g", p:"37 lei"}, {s:"MARE/Large 800g", p:"74 lei"} ]},
            { ro: "PIZZA CAPRICIOSA", d_ro: "Cașcaval, mozzarella, sos rosii, suncă presată, ciuperci, ardei copt, măsline", d_en: "Cheese, mozzarella, tomato sauce, pressed ham, mushrooms, baked peppers, olives", img: "img/pizza_capriciosa.jpg", sizes: [ {s:"MEDIE/Medium 450g", p:"37 lei"}, {s:"MARE/Large 900g", p:"74 lei"} ]},
            { ro: "PIZZA VEGETARIANĂ", en: "Vegetarian Pizza", d_ro: "Cașcaval, mozzarella, sos roșii, ciuperci, porumb, măsline, ardei gras. (DE POST/FAST fără cașcaval și mozzarella)", d_en: "Cheese, mozzarella, tomato sauce, mushrooms, corn, olives, bell pepper. (without cheese and mozzarella)", img: "img/pizza_vegetariana.jpg", sizes: [ {s:"MEDIE/Medium 450g", p:"37 lei"}, {s:"MARE/Large 900g", p:"74 lei"} ]},
            { ro: "PIZZA QUATTRO FORMAGGI", d_ro: "Cremă Gran cucina, gorgonzola, mozzarella, cașcaval, parmezan", d_en: "Gran cucina, gorgonzola, mozzarella, cheese, parmesan", img: "img/pizza_quattro_formaggi.jpg", sizes: [ {s:"MEDIE/Medium 420g", p:"37 lei"}, {s:"MARE/Large 840g", p:"74 lei"} ]},
            { ro: "PIZZA AL TONO", d_ro: "Cașcaval, mozzarella, sos roșii, ton, ceapă, măsline", d_en: "Cheese, mozzarella, tomato sauce, tuna, onion, olives", img: "img/pizza_al_tono.jpg", sizes: [ {s:"MEDIE/Medium 420g", p:"37 lei"}, {s:"MARE/Large 840g", p:"74 lei"} ]},
            { ro: "PIZZA QUATTRO STAGIONI", d_ro: "Cașcaval, mozzarella, șuncă presată, salam, ciuperci, ardei kapia", d_en: "Cheese, mozzarella, pressed ham, salami, mushrooms, capsicum pepper", img: "img/pizza_quattro_stagioni.jpg", sizes: [ {s:"MEDIE/Medium 450g", p:"37 lei"}, {s:"MARE/Large 900g", p:"74 lei"} ]}
        ]
    },
    {
        id: "garnituri", category: "FOCACCIA, TOPPING & GARNITURI",
        items: [
            { ro: "FOCACCIA CU USTUROI", en: "Focaccia with garlic", w: "180g", p: "16 lei", img: "img/focaccia_usturoi.jpg" },
            { ro: "FOCACCIA CU PARMEZAN", en: "Focaccia with parmesan", w: "180g", p: "16 lei", img: "img/focaccia_parmezan.jpg" },
            { ro: "FOCACCIA CU ROZMARIN", en: "Focaccia with rosemary", w: "180g", p: "16 lei", img: "img/focaccia_rozmarin.jpg" },
            { ro: "FOCACCIA CU MOZZARELLA", en: "Focaccia with mozzarella", w: "180g", p: "16 lei", img: "img/focaccia_mozzarella.jpg" },
            { ro: "TOPPING CIUPERCI", en: "Mushrooms topping", w: "60g", p: "6 lei", img: "img/topping.jpg" },
            { ro: "TOPPING PORUMB", en: "Corn topping", w: "60g", p: "6 lei", img: "img/topping.jpg" },
            { ro: "TOPPING ȘUNCĂ", en: "Ham topping", w: "60g", p: "6 lei", img: "img/topping.jpg" },
            { ro: "KETCHUP DULCE", en: "Sweet ketchup", w: "40g", p: "6 lei", img: "img/sosuri.jpg" },
            { ro: "SOSUL CASEI", en: "House sauce", w: "40g", p: "6 lei", img: "img/sosuri.jpg" },
            { ro: "ULEI PICANT", en: "Spicy oil", w: "40g", p: "6 lei", img: "img/sosuri.jpg" },
            { ro: "SOS „TITA”", en: "„TITA” sauce", w: "100g", p: "11 lei", d_ro: "maioneză, ketchup, pastă ardei iute", d_en: "mayonnaise, ketchup, chili paste" },
            { ro: "IAURT COVĂSIT", en: "Curdled yogurt", w: "250g", p: "21 lei", img: "img/iaurt.jpg" },
            { ro: "CARTOFI ȚĂRĂNEȘTI", en: "Rustic potatoes", w: "200g", p: "22 lei", img: "img/cartofi_taranesti.jpg" },
            { ro: "CARTOFI SOTE", en: "Sauteed potatoes", w: "200g", p: "18 lei", img: "img/cartofi_sote.jpg" },
            { ro: "CARTOFI PRĂJIȚI", en: "Fried potatoes", w: "150g", p: "16 lei", img: "img/cartofi_prajiti.jpg" },
            { ro: "PIURE DE CARTOFI", en: "Mashed potatoes", w: "200g", p: "18 lei", img: "img/piure_cartofi.jpg" }
        ]
    },
    {
        id: "salate", category: "SALATE / SALADS",
        items: [
            { ro: "SALATĂ DE VARĂ", en: "Summer salad", w: "200g", p: "16 lei", d_ro: "roșii, castraveți", d_en: "tomatoes, cucumbers", img: "img/salata_vara.jpg" },
            { ro: "SALATĂ DE ROȘII CU BRÂNZĂ", en: "Tomato salad with chees", w: "200/50g", p: "19 lei", img: "img/salata_rosii_branza.jpg" },
            { ro: "SALATĂ DE SFECLĂ", en: "Beet salad", w: "200g", p: "16 lei", img: "img/salata_sfecla.jpg" },
            { ro: "SALATĂ DE ARDEI COPȚI", en: "Baked pepper salad", w: "200g", p: "16 lei", img: "img/salata_ardei_copti.jpg" },
            { ro: "SALATĂ DE CASTRAVECIORI MURAȚI", en: "Pickled cucumber salad", w: "200g", p: "16 lei", img: "img/salata_castraveti_murati.jpg" },
            { ro: "SALATĂ DE VARZĂ", en: "Cabbage salad", w: "200g", p: "16 lei", img: "img/salata_varza.jpg" },
            { ro: "SALATĂ BULGĂREASCĂ", en: "Bulgarian salad", w: "450g", p: "47 lei", d_ro: "salată verde, roșii, ou, castraveți, ardei, șuncă, măsline, telemea", d_en: "lettuce, tomato, egg, cucumber, pepper, ham, olives, cheese", img: "img/salata_bulgareasca.jpg" },
            { ro: "SALATĂ DE PUI", en: "Chicken salad", w: "400g", p: "60 lei", d_ro: "piept de pui, salată, roșii, ardei, castraveți", d_en: "chicken breast, lettuce, tomatoes, peppers, cucumbers", img: "img/salata_pui.jpg" },
            { ro: "SALATĂ DE TON", en: "Tuna salad", w: "350g", p: "45 lei", img: "img/salata_ton.jpg" },
            { ro: "SALATĂ ORIENTALĂ", en: "Oriental salad", w: "250g", p: "37 lei", img: "img/salata_orientala.jpg" }
        ]
    },
    {
        id: "mic-dejun", category: "MIC DEJUN / BREAKFAST & DIVERSE",
        items: [
            { ro: "ARDEI IUTE", en: "Hot pepper", w: "1 buc", p: "2 lei" },
            { ro: "PÂINE FELIATĂ", en: "Sliced bread", w: "4 felii", p: "4 lei" },
            { ro: "SMÂNTÂNĂ", en: "Sour cream", w: "100g", p: "6 lei" },
            { ro: "LĂMÂIE", en: "Lemon", w: "100g", p: "6 lei" },
            { ro: "MUJDEI", en: "Garlic sauce", w: "100g", p: "6 lei" },
            { ro: "MUȘTAR", en: "Mustard", w: "100g", p: "6 lei" },
            { ro: "MAIONEZĂ", en: "Mayonnaise", w: "100g", p: "6 lei" },
            { ro: "KETCHUP", en: "Ketchup", w: "50g", p: "6 lei", img: "img/ketchup_hrean.jpg" },
            { ro: "HREAN", en: "Horseradish", w: "50g", p: "8 lei" },
            { ro: "SALAM USCAT", en: "Dry salami", w: "100g", p: "17 lei", img: "img/salam_uscat.jpg" },
            { ro: "ȘUNCĂ PRESATĂ", en: "Pressed ham", w: "100g", p: "16 lei", img: "img/sunca_presata.jpg" },
            { ro: "SLĂNINĂ AFUMATĂ", en: "Smoked bacon", w: "100g", p: "16 lei", img: "img/slanina_afumata.jpg" },
            { ro: "TELEMEA VACĂ BIO", en: "Organic cow cheese", w: "100g", p: "16 lei", img: "img/telemea_vaca.jpg" },
            { ro: "BRÂNZĂ BURDUF", en: "Bellows cheese", w: "100g", p: "18 lei", img: "img/branza_burduf.jpg" },
            { ro: "CAȘCAVAL BIO", en: "Organic cheese", w: "100g", p: "18 lei", img: "img/cascaval.jpg" },
            { ro: "MĂSLINE NEGRE", en: "Black olives", w: "100g", p: "9 lei" },
            { ro: "ROȘII", en: "Tomatoes", w: "100g", p: "9 lei" },
            { ro: "CASTRAVEȚI", en: "Cucumbers", w: "100g", p: "9 lei" },
            { ro: "OCHIURI SIMPLE", en: "Simple fried eggs", w: "150g", p: "21 lei", img: "img/ochiuri_simple.jpg" },
            { ro: "OCHIURI CU BACON", en: "Fried eggs with bacon", w: "200g", p: "26 lei", img: "img/ochiuri_bacon.jpg" },
            { ro: "OCHIURI CU CAȘCAVAL", en: "Fried eggs with cheese", w: "200g", p: "25 lei", img: "img/ochiuri_cascaval.jpg" },
            { ro: "OMLETĂ CU ȘUNCĂ", en: "Scrambled eggs with bacon", w: "200g", p: "27 lei", img: "img/omleta_sunca.jpg" },
            { ro: "OMLETĂ SIMPLĂ", en: "Scrambled eggs", w: "150g", p: "20 lei", img: "img/omleta_simpla.jpg" },
            { ro: "OMLETĂ CU ȘUNCĂ ȘI CAȘCAVAL", en: "Scrambled eggs with bacon and cheese", w: "250g", p: "30 lei", img: "img/omleta_sunca_cascaval.jpg" },
            { ro: "OMLETĂ CU CAȘCAVAL", en: "Scrambled eggs with cheese", w: "200g", p: "26 lei", img: "img/omleta_cascaval.jpg" },
            { ro: "OMLETĂ ȚĂRĂNEASCĂ", en: "Rustic Scrambled eggs", w: "250g", p: "32 lei", img: "img/omleta_taraneasca.jpg" },
            { ro: "SALATĂ DE VINETE", en: "Eggplant salad", w: "100g", p: "24 lei", img: "img/vinete_zacusca.jpg" },
            { ro: "ZACUSCĂ", en: "Romanian vegetable spread", w: "100g", p: "28 lei", img: "img/vinete_zacusca.jpg" },
            { ro: "SALATĂ DE CRUDITĂȚI", en: "Raw vegetable salad", w: "300g", p: "29 lei", img: "img/salata_cruditati.jpg" },
            { ro: "GEM (Porționat)", en: "Jam (Portioned)", w: "10g", p: "4 lei" },
            { ro: "MIERE (Porționat)", en: "Honey (Portioned)", w: "10g", p: "6 lei" },
            { ro: "UNT (Porționat)", en: "Butter (Portioned)", w: "10g", p: "4 lei" },
            { ro: "LAPTE BIO", en: "Organic milk", w: "250ml", p: "16 lei" },
            { ro: "LAPTE BIO CU CACAO", en: "Organic milk with cocoa", w: "200ml", p: "19 lei" },
            { ro: "CEREALE", en: "Cereals", w: "100g", p: "19 lei" }
        ]
    },
    {
        id: "desert", category: "DESERT / DESSERT",
        items: [
            { 
                ro: "PAPANAȘI CU SMÂNTÂNĂ", 
                en: "Sweet cheese donuts with sour cream", 
                w: "200g", 
                img: "img/papanasi.jpg", 
                sizes: [ 
                    {s: "CU DULCEAȚĂ / With Jam", p: "27 lei"}, 
                    {s: "CU FINETTI / With Finetti", p: "27 lei"} 
                ]
            },
            { ro: "CLĂTITE", en: "Pancakes", w: "150g", p: "24 lei", img: "img/clatite.jpg" },
            { ro: "ÎNGHEȚATĂ ASORTATĂ", en: "Assorted ice cream", w: "200g", p: "29 lei", img: "img/inghetata.jpg" }
        ]
    },
    {
        id: "bar", category: "BĂUTURI / BEVERAGES",
        items: [
            { ro: "APĂ MINERALĂ BORSEC 1,5l", en: "Mineral water Borsec", w: "", p: "12 lei" },
            { ro: "APĂ PLATĂ 2l", en: "Still water", w: "", p: "14 lei" },
            { ro: "APĂ TALEA 0,5l", en: "Talea water", w: "", p: "10 lei" },
            { ro: "AQUA CARPATICA 1l", en: "", w: "", p: "12 lei" },
            { ro: "CAFEA LA CAFETIERĂ", en: "Coffee at coffeemaker", w: "50ml", p: "14 lei" },
            { ro: "ESPRESSO SCURT", en: "Short espresso", w: "50ml", p: "10 lei" },
            { ro: "ESPRESSO DUBLU", en: "Double espresso", w: "100ml", p: "15 lei" },
            { ro: "CAFEA LATTE", en: "Cafe latte", w: "200ml", p: "14 lei" },
            { ro: "CAPPUCCINO", en: "Cappuccino", w: "200ml", p: "14 lei" },
            { ro: "COCA COLA", en: "", w: "0.5l", p: "12 lei" },
            { ro: "COCA COLA 1.5L", en: "", w: "1.5l", p: "17 lei" },
            { ro: "COCA COLA DOZĂ", en: "", w: "0.33l", p: "12 lei" },
            { ro: "FANTA", en: "", w: "0.5l", p: "12 lei" },
            { ro: "FANTA 1.5L", en: "", w: "1.5l", p: "17 lei" },
            { ro: "FANTA DOZĂ", en: "", w: "0.33l", p: "12 lei" },
            { ro: "FUZE TEA LEMON GRAS", en: "", w: "0.5l", p: "14 lei" },
            { ro: "FUZE TEA PEACH", en: "", w: "0.5l", p: "12 lei" },
            { ro: "STELLA ARTOIS", en: "Beer", w: "0.33l", p: "14 lei" },
            { ro: "PERONI", en: "Beer", w: "0.5l", p: "14 lei" },
            { ro: "SILVA NEAGRĂ", en: "Beer", w: "0.5l", p: "12 lei" },
            { ro: "BERGENBIER DOZĂ", en: "Beer", w: "0.5l", p: "12 lei" },
            { ro: "CONACUL BERTOLA SAUVIGNON BLANC", en: "Wine", w: "0.75l", p: "110 lei" },
            { ro: "PURCARI RARĂ NEAGRĂ", en: "Wine", w: "0.75l", p: "110 lei" },
            { ro: "PURCARI SAUVIGNON", en: "Wine", w: "0.75l", p: "100 lei" },
            { ro: "VIȘINATĂ", en: "Sour cherry brandy", w: "100ml", p: "23 lei" },
            { ro: "CĂPȘUNATĂ", en: "Strawberry brandy", w: "100ml", p: "23 lei" },
            { ro: "MURATĂ", en: "Blackberry brandy", w: "100ml", p: "23 lei" },
            { ro: "COCKTAIL FRUCTE", en: "Fruits cocktail", w: "100ml", p: "23 lei" },
            { ro: "VIN NEGRU FIERT", en: "Black Mulled wine", w: "1l", p: "115 lei" },
            { ro: "ȚUICĂ DE CASĂ", en: "", w: "100ml", p: "20 lei" },
            { ro: "PALINCĂ DE CASĂ", en: "", w: "100ml", p: "30 lei" }
        ]
    }
];

let currentLang = 'ro';
let cart = {};

function escapeJs(str) {
    if (!str) return '';
    return str.replace(/'/g, "\\'");
}

function setLanguage(lang) {
    currentLang = lang;
    
    // Plasa de siguranta pentru butoane
    const btnRo = document.getElementById('btn-ro');
    const btnEn = document.getElementById('btn-en');
    
    if (btnRo) btnRo.classList.remove('active');
    if (btnEn) btnEn.classList.remove('active');
    
    const activeBtn = document.getElementById('btn-' + lang);
    if (activeBtn) activeBtn.classList.add('active');
    
    renderMenu();
    updateCartUI();
}

function updateCart(itemKey, priceStr, change, nameRo, nameEn) {
    const price = parseInt(priceStr) || 0;
    if (!cart[itemKey]) cart[itemKey] = { qty: 0, price: price, ro: nameRo, en: nameEn, perPiece: priceStr.indexOf('/buc') !== -1 };

    cart[itemKey].qty += change;
    if (cart[itemKey].qty <= 0) delete cart[itemKey];

    const newQty = cart[itemKey] ? cart[itemKey].qty : 0;
    const span = document.querySelector(`.qty-val[data-qty-key="${CSS.escape(itemKey)}"]`);
    if (span) span.textContent = newQty;

    updateCartUI();
}

function updateCartUI() {
    const cartEl = document.getElementById('cart-summary');
    if (!cartEl) return;
    
    let totalItems = 0;
    let totalPrice = 0;
    
    for (let item in cart) {
        totalItems += cart[item].qty;
        totalPrice += cart[item].qty * cart[item].price;
    }
    
    if (totalItems > 0) {
        cartEl.style.display = 'flex';
        
        const cartCount = document.getElementById('cart-count');
        const cartTotal = document.getElementById('cart-total');
        const cartProdText = document.getElementById('cart-prod-text');
        const orderBtnText = document.getElementById('order-btn-text');
        
        if (cartCount) cartCount.innerText = totalItems;
        if (cartTotal) cartTotal.innerText = totalPrice + ' lei';
        
        if (cartProdText) {
            cartProdText.innerText = totalItems === 1 
                ? (currentLang === 'ro' ? 'produs' : 'item') 
                : (currentLang === 'ro' ? 'produse' : 'items');
        }
        
        if (orderBtnText) {
            orderBtnText.innerText = currentLang === 'ro' ? 'Comandă 💬' : 'Order 💬';
        }
        
    } else {
        cartEl.style.display = 'none';
    }
}

function sendWhatsApp() {
    openCartModal();
}

function openCartModal() {
    const modal = document.getElementById('cart-modal');
    const itemsEl = document.getElementById('cart-modal-items');
    const totalEl = document.getElementById('cart-modal-total-val');
    const titleEl = document.getElementById('cart-modal-title');
    const backBtn = document.getElementById('cart-modal-back');
    const confirmBtn = document.getElementById('cart-modal-confirm');

    titleEl.innerText = currentLang === 'ro' ? 'Comanda ta' : 'Your order';
    backBtn.innerText = currentLang === 'ro' ? '← Înapoi' : '← Back';
    confirmBtn.innerText = currentLang === 'ro' ? 'Confirmă pe WhatsApp 💬' : 'Confirm on WhatsApp 💬';

    let total = 0;
    let html = '';
    for (let key in cart) {
        const item = cart[key];
        const displayName = currentLang === 'ro' ? item.ro : (item.en && item.en.trim() ? item.en : item.ro);
        const qtyLabel = item.perPiece ? `${item.qty} buc` : `${item.qty}x`;
        const lineTotal = item.qty * item.price;
        total += lineTotal;
        html += `<div class="cart-modal-item">
            <div class="cart-modal-item-name">${qtyLabel} ${displayName}</div>
            <div class="cart-modal-item-right">
                <div class="cart-modal-qty-controls">
                    <button class="cart-modal-qty-btn" onclick="changeModalQty('${escapeJs(key)}', -1)">−</button>
                    <span class="cart-modal-qty-val">${item.qty}</span>
                    <button class="cart-modal-qty-btn" onclick="changeModalQty('${escapeJs(key)}', 1)">+</button>
                </div>
                <span class="cart-modal-item-price">${lineTotal} lei</span>
            </div>
        </div>`;
    }
    itemsEl.innerHTML = html;
    totalEl.innerText = total + ' lei';
    modal.style.display = 'flex';
}

function changeModalQty(key, change) {
    if (!cart[key]) return;
    cart[key].qty += change;
    if (cart[key].qty <= 0) delete cart[key];

    const newQty = cart[key] ? cart[key].qty : 0;
    const span = document.querySelector(`.qty-val[data-qty-key="${CSS.escape(key)}"]`);
    if (span) span.textContent = newQty;

    updateCartUI();
    if (Object.keys(cart).length === 0) {
        closeCartModal();
    } else {
        openCartModal();
    }
}

function closeCartModal(event) {
    if (event && event.target !== document.getElementById('cart-modal')) return;
    document.getElementById('cart-modal').style.display = 'none';
}

let selectedPaymentMethod = 'cash';

function selectPayment(method) {
    selectedPaymentMethod = method;
    const options = document.querySelectorAll('.payment-option');
    options.forEach(opt => {
        const radio = opt.querySelector('input');
        if (radio.value === method) {
            opt.classList.add('active');
            radio.checked = true;
        } else {
            opt.classList.remove('active');
            radio.checked = false;
        }
    });
}

function confirmOrder() {
    let message = currentLang === 'ro' ? "Bună ziua! Aș dori să comand:\n\n" : "Hello! I would like to order:\n\n";
    let total = 0;

    for (let key in cart) {
        const item = cart[key];
        let displayName = item.ro;
        if (item.en && item.en.trim() !== "") {
            displayName += ` / ${item.en}`;
        }
        message += `- ${item.qty}x ${displayName} (${item.qty * item.price} lei)\n`;
        total += item.qty * item.price;
    }

    const paymentText = selectedPaymentMethod === 'cash' ? (currentLang === 'ro' ? "Cash 💵" : "Cash 💵") : (currentLang === 'ro' ? "Card 💳" : "Card 💳");
    
    message += `\nTotal: ${total} lei`;
    message += `\nMetodă de plată: ${paymentText}`;
    
    document.getElementById('cart-modal').style.display = 'none';
    window.open(`https://wa.me/40767233077?text=${encodeURIComponent(message)}`, '_blank');
}

function renderMenu() {
    const container = document.getElementById('menu-container');
    const nav = document.getElementById('dynamic-nav') || document.querySelector('.sticky-nav');
    
    if (!container) return;
    container.innerHTML = '';
    if (nav) nav.innerHTML = '';

    let navHTML = '';
    let allHTML = '';

    menuData.forEach(cat => {
        const navTitle = currentLang === 'ro' ? cat.category.split(' / ')[0] : (cat.category.split(' / ')[1] || cat.category);
        navHTML += `<a href="#${cat.id}">${navTitle}</a>`;

        let sectionHTML = `<section id="${cat.id}" class="category"><h2 class="category-title">${cat.category}</h2>`;
        
        cat.items.forEach(item => {
            const baseNameRo = item.ro;
            const baseNameEn = item.en || '';
            const displayTitle = currentLang === 'ro' ? baseNameRo : (baseNameEn || baseNameRo);
            const itemKey = baseNameRo; 
            const qty = cart[itemKey] ? cart[itemKey].qty : 0;
            
            sectionHTML += `<article class="menu-item">`;
            
            if (item.img) {
                sectionHTML += `<img src="${item.img}" alt="" onerror="this.style.display='none'" class="item-img" loading="lazy">`;
            }
            
            sectionHTML += `<div class="item-content">
                <div class="item-header">
                    <h3 class="item-name">${displayTitle} <span class="item-weight">${item.w || ''}</span></h3>`;
            
            if (item.p) {
                sectionHTML += `<div class="item-action-row">
                    <span class="item-price">${item.p}</span>
                    <div class="quantity-controls">
                        <button class="qty-btn" onclick="updateCart('${escapeJs(itemKey)}', '${item.p}', -1, '${escapeJs(baseNameRo)}', '${escapeJs(baseNameEn)}')">-</button>
                        <span class="qty-val" data-qty-key="${escapeJs(itemKey)}">${qty}</span>
                        <button class="qty-btn" onclick="updateCart('${escapeJs(itemKey)}', '${item.p}', 1, '${escapeJs(baseNameRo)}', '${escapeJs(baseNameEn)}')">+</button>
                    </div>
                </div>`;
            }
            sectionHTML += `</div>`;
            
            if (currentLang === 'ro' && item.en) sectionHTML += `<p class="item-eng">${item.en}</p>`;
            if (currentLang === 'en' && item.ro && !item.en) sectionHTML += `<p class="item-eng">${item.ro}</p>`;
            
            if (item.d_ro) {
                const desc = currentLang === 'ro' ? item.d_ro : (item.d_en || item.d_ro);
                sectionHTML += `<div class="item-desc">${desc}</div>`;
            }
            
            if (item.al_ro) {
                const al = currentLang === 'ro' ? item.al_ro : (item.al_en || item.al_ro);
                sectionHTML += `<div class="item-allergens">
                    <strong>⚠️ ${currentLang === 'ro' ? 'Alergeni' : 'Allergens'}:</strong><br>
                    ${al}
                </div>`;
            }
            
            if (item.sizes) {
                sectionHTML += `<div class="pizza-prices">`;
                item.sizes.forEach(size => {
                    const sizeKeyRo = `${baseNameRo} (${size.s})`;
                    const sizeKeyEn = baseNameEn ? `${baseNameEn} (${size.s})` : '';
                    const sizeQty = cart[sizeKeyRo] ? cart[sizeKeyRo].qty : 0;
                    
                    sectionHTML += `<div class="pizza-size" style="display:flex; flex-direction: column; padding: 10px 0;">
                        <span style="font-weight: 500; margin-bottom: 5px;">${size.s}</span>
                        <div class="item-action-row" style="margin: 0;">
                            <span class="item-price" style="margin:0;">${size.p}</span>
                            <div class="quantity-controls" style="margin:0;">
                                <button class="qty-btn" onclick="updateCart('${escapeJs(sizeKeyRo)}', '${size.p}', -1, '${escapeJs(sizeKeyRo)}', '${escapeJs(sizeKeyEn)}')">-</button>
                                <span class="qty-val" data-qty-key="${escapeJs(sizeKeyRo)}">${sizeQty}</span>
                                <button class="qty-btn" onclick="updateCart('${escapeJs(sizeKeyRo)}', '${size.p}', 1, '${escapeJs(sizeKeyRo)}', '${escapeJs(sizeKeyEn)}')">+</button>
                            </div>
                        </div>
                    </div>`;
                });
                sectionHTML += `</div>`;
            }
            
            sectionHTML += `</div></article>`;
        });
        
        sectionHTML += `</section>`;
        allHTML += sectionHTML;
    });

    if (nav) nav.innerHTML = navHTML;
    container.innerHTML = allHTML;
}

renderMenu();
