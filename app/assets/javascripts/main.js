$(document).ready(function() {
	$('.go-to-start').click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 300);
	});

	$('.go-to-time').click(function() {
		$('html, body').animate({
			scrollTop: ($('#time').offset().top - $('.navbar').height())
		}, 300);
	});

	$('.go-to-contact').click(function() {
		$('html, body').animate({
			scrollTop: ($('#contact').offset().top - $('.navbar').height())
		}, 300);
	});

	$('#navbar a').click(function(e) {
		e.preventDefault();

		$('html, body').animate({
			scrollTop: ($($(this).attr('href')).offset().top - $('.navbar').height())
		}, 300);
	});

	$('form[action="/subscribes"]').submit(function(e) {
		var errors = '<p>The form was not submitted.</p>';
		var hasError = false;

		if (!validateEmail($('#subscribe_email').val()) || !notMax($('#contact_email').val(), 255)) {
			errors += '<p>You must write a valid email.</p>';
			hasError = true;
		}

		if (hasError) {
			e.preventDefault();
			bootstrapAlert(errors, 'alert-danger');
		}
	});

	$('form[action="/contacts"]').submit(function(e) {
		var errors = '<p>The form was not submitted.</p>';
		var hasError = false;

		if (!validateEmail($('#contact_email').val()) || !notMax($('#contact_email').val(), 255)) {
			errors += '<p>You must write a valid email.</p>';
			hasError = true;
		}

		if (!notEmpty($('#contact_subject').val()) || !notMax($('#contact_subject').val(), 255)) {
			errors += '<p>You must write between 1 and 255 characters in the subject field.</p>';
			hasError = true;
		}

		if (!notEmpty($('#contact_message').val()) || !notMax($('#contact_message').val(), 800)) {
			errors += '<p>You must write between 1 and 800 characters in the message field.</p>';
			hasError = true;
		}

		if (hasError) {
			e.preventDefault();
			bootstrapAlert(errors, 'alert-danger');
		}
	});

	$('#admin_box .button i').unbind('click').click(function() {
		if ($('#admin_box').hasClass('closed')) {
			$(this).removeClass('fa-chevron-up').addClass('fa-chevron-down');
			$('#admin_box').removeClass('closed').addClass('open');
		} else {
			$(this).removeClass('fa-chevron-down').addClass('fa-chevron-up');
			$('#admin_box').removeClass('open').addClass('closed');
		}
	});

	$(document).click(function() {
		$('.collapse').collapse('hide');
	});
});

function validateEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	return re.test(email);
}

function notEmpty(text) {
	var re = /([^\s])/
	return re.test(text);
}

function notMax(text, max) {
	return text.length > max? false:true;
}

function bootstrapAlert(text, type) {
	$('.alert').remove();

	var span = $('<span>', {
		ariaHidden: 'true'
	}).html('&times;');

	var button = $('<button>', {
		type: 'button',
		class: 'close',
		dataDismiss: 'alert',
		ariaLabel: 'Close'
	}).append(span);

	var alert = $('<div>', {
		class: 'alert ' + type + ' alert-dismissible',
		role: 'alert'
	}).append(button).append(text);

	$('body').append(alert);
	
	$('.alert button.close').click(function() {
		$('.alert').remove();
	});
}