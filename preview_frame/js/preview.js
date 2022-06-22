
function displayQR(visible)
{

if(visible)
	$('#qrcode').fadeIn();
else
	$('#qrcode').fadeOut();
}

function checkParams()
{
	var param = window.location.href.slice(window.location.href.indexOf('?') + 1).toLowerCase();

	if(param.indexOf("screen=md") > -1)
		$('a[data-target=tablet-h]').trigger('click');
	if(param.indexOf("screen=sm") > -1)
		$('a[data-target=tablet-v]').trigger('click');
	if(param.indexOf("screen=xs") > -1)
	{
		$('a[data-target=mobile]').trigger('click');
		displayQR(true);
	}
}

function removeLoading(){
	$('.loading').removeClass('loading');
}

$( document ).ready(function() {

				$('#framelive').load(function () {
					$('#loadingMessage').css('display', 'none');
				});

				$('#devices').on('click', '.change-device', function(){
					var device = $(this).data('target');
					$('.change-device').removeClass('active');
					$(this).addClass('active');
					$('#iframe-container').removeClass().addClass(device).find('iframe');
					var $loadingElement = $('#iframe-wrapper');
					$('body').removeClass().addClass('framed-' + device);
					if(device==="mobile")
						displayQR(true);
					else
						displayQR(false);
				});

				$(window).resize(function(){
					if ($(window).width() <= 1030){
						$('a[data-target=desktop]').trigger('click');
						displayQR(false);
					}	
				});

				checkParams();
				
				$('#qrcode-inner').qrcode({
					"text": waDirectLink
				});
});