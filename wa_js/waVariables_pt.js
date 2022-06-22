var WaJsVariable = {};
WaJsVariable.form_post_url="wa_php/comp/{{waId}}/form_post.php";
WaJsVariable.search_index_filename="wa_js/waSearchIndex_{{lang}}.js";
var WaPageContext = {};
var WaContext = {};
var WaTranslator = {};
var WaIdContext = 10043382;
WaTranslator.tr = function(key) 
{ 
    return (this.messages[key]!=undefined)?this.messages[key]:key;
}; 
WaTranslator.messages={
"Feature no available in preview":"Feature no available in preview",
"Untitled page":"Untitled page",
"Form:Firstname field":"Nome",
"Form:Lastname field":"Sobrenome",
"Form:My choices":"Escolher",
"Form:Sample choice value":"Melhor",
"label button Send form":"Enviar",
"This field is mandatory":"Campo obrigatório",
"Form successfully sended !":"Formulário de contato foi enviada com sucesso !",
"Search placeholder":"Pesquisa",
"%1 result found !":"%1 gefundene Resultate",
};

//Selectors
var waImageGalleryClassSelector = "wa-image-gallery-tobind";
var waImageGalleryNoIndicatior = "wa-image-gallery-no-thumbs";
var waImageGalleryIdLinkSelectorPattern = "wa-gal-link";
var waCarouselIdLinkSelectorPattern = "wa-compcarousel-link";
var waCarouselIdSelectorPattern = "wa-compcarousel";
