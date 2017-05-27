$(document).ready(function() {
	$('.go-to-start').click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 500);
	});

	$('.go-to-time').click(function() {
		$('html, body').animate({
			scrollTop: ($('#time').offset().top - $('.navbar').height())
		}, 500);
	});

	$('.go-to-contact').click(function() {
		$('html, body').animate({
			scrollTop: ($('#contact').offset().top - $('.navbar').height())
		}, 500);
	});

	$('#navbar a').click(function(e) {
		e.preventDefault();

		$('html, body').animate({
			scrollTop: ($($(this).attr('href')).offset().top - $('.navbar').height())
		}, 500);
	});

	$('form[action="/subscribes"]').submit(function(e) {
		var errors = '<p>The form was not submitted.</p>';
		var hasError = false;

		if (!validateEmail($('#subscribe_email').val())) {
			errors += '<p>You must write a valid email.</p>';
			hasError = true;
		}

		if (hasError) {
			e.preventDefault();
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
				class: 'alert alert-danger alert-dismissible',
				role: 'alert'
			}).append(button).append(errors);

			$('body').append(alert);

			$('.alert button.close').click(function() {
				$('.alert').remove();
			});
		}
	});

	$('form[action="/contacts"]').submit(function(e) {
		var errors = '<p>The form was not submitted.</p>';
		var hasError = false;

		if (!validateEmail($('#contact_email').val())) {
			errors += '<p>You must write a valid email.</p>';
			hasError = true;
		}

		if (!notEmpty($('#contact_subject').val())) {
			errors += '<p>You must write a subject.</p>';
			hasError = true;
		}

		if (!notEmpty($('#contact_message').val())) {
			errors += '<p>You must write a message.</p>';
			hasError = true;
		}

		if (hasError) {
			e.preventDefault();
			bootstrapAlert(errors, 'alert-danger');
		}
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