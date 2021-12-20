const UI = {};

UI.Icon = function (src) {
    this.src = src;
};

UI.MenuItem = function (properties) {
	
    // Attributs d'un sous-menu
    this.label = properties.label;
	this.icon = properties.icon
    this.ulSubmenu = "<ul></ul>";
    this.item = "<li><a><table><tbody><tr><td></td><td>" + this.label + "</td></tr></tbody></table></a></li>";
    this.subItem = "<li><a><table><tbody><tr><td></td><td>" + this.label + "</td><td></td></tr></tbody></table></a></li>";

    // Méthode d'ajout des sous-menus
    this.add = function (menuItem) {
		$(document).ready(function () {
			setTimeout(() => {
				// ajout des balise de sous menu
				$('li:nth-child(2) ul').append(menuItem.subItem);
				// ajout de l'image 
				$('.with_child ul li a table tbody tr td:nth-child(1)').append("<img src=" + menuItem.icon.src + ">");
					$('.with_child ul li a table tbody tr td:nth-child(1) img:nth-child(2)').remove();

					// ajouter une fleche
						//$('.with_child ul li a table tbody tr td:nth-child(3)').append('<img src="dropdown.png">');
						//$('.with_child ul li a table tbody tr td:nth-child(3) img:nth-child(2)').remove();

				$('.with_child').hover(function(){ $(this).addClass('with_child_on') },function(){ $(this).removeClass('all_off') })
								.mouseleave(function () { $(this).addClass('all_off') }, function () { $(this).removeClass('with_child_on') });
				$('.no_child').hover(function(){ $(this).addClass('no_child_on') },function(){ $(this).removeClass('all_off') })
								.mouseleave(function () { $(this).addClass('all_off') }, function () { $(this).removeClass('no_child_on') });
			}, 0);
		});
    };
};

UI.Menu = function () {
	
    this.add = function (menuItem) {
		
        $(document).ready(function () {
			
            $(".menu").append(menuItem.item);
            $("li:nth-child(1)").addClass("no_child all_off");
			$('li:first-child a').attr("href", "http://www.invalid-domain.com/invalid-link");
            $("li:nth-child(2)").addClass("with_child all_off");
            $("li:nth-child(2)").append(menuItem.ulSubmenu);
        });
    };
    this.appendTo = function (DOMElement) {
        $(DOMElement).append("<ul class='menu horizontal ltr'></ul>");
    };

};
