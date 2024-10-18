$(document).ready(function () {
	// pre stare sablony
	$(".fancybox-img").fancybox({
		prevEffect  : 'none',
		nextEffect  : 'none',
		helpers : {
			title : {
				type : 'over'
			}
		},
		beforeShow : function() {
			this.title = (this.title ? '' + this.title + '' : '') + 'Fotka ' + (this.index + 1) + ' z ' + this.group.length;
		}
	});

	// pre nove sablony, kde mozu byt naraz aj iframe aj image
	$('.fancybox').fancybox({
        openEffect  : 'none',
        closeEffect : 'none',
        nextEffect  : 'none',
        prevEffect  : 'none',
		helpers : {
			title : {
				type : 'over'
			}
		},
		beforeShow : function() {
			if (!$(this.element[0]).hasClass('fancybox.iframe')) {
				this.title = (this.title ? '' + this.title + '' : '') + 'Fotka ' + (this.index + 1) + ' z ' + this.group.length;
			}
		}
	});
});