$(function() {
	var navLinkContainer = ".nav-link-container";
	var lastNavLink = -1;
	var links = $(navLinkContainer).find('li a');
	var targets = links.map(function(i, e) {
		return $(e.hash);
	});
	var linkMax = links.length;
	
    $('a[href*="#"]:not([href="#"])').click(function() {
        var target = $(this.hash);
        if (target.length) {
            $("html, body").animate({
                    scrollTop: (target.offset().top+10)
                },
                1000
            );
			
			var index = -1;
					
			for (var i=0; i<linkMax; i++) {
				if (links[i].hash === this.hash) {
					index = i;
					break;
				}
			}
			
			changeActive(index);
        }
    });
	
	$(window).scrollTop(0);
	changeActive(0);
	
	$( window ).scroll(function() {
		var currentY = $(document).scrollTop();
		var i, target;
		for (i = 0;i<linkMax;i++) {
			if ($(targets[i]).offset().top > currentY) {
				break;
			}
		}
		
		i--;
		
		if (i != lastNavLink) {
			changeActive(i);
		}
	});
	
	function changeActive(index) {

		if (links[lastNavLink]) {
			$(links[lastNavLink]).parent().removeClass('active');
		}
		
		if (links[index] && index != lastNavLink) {
			lastNavLink = index;
			$(links[index]).parent().addClass('active');
		}
	}

	$(".openModal, .modal .btn-close, .modal .close").click(function(e) {
	   	e.preventDefault();
	   	var target = $($(e.target).data('target'));
	   	target.toggleClass('show');
	});

});

