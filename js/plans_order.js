(function(f){function d(h){return !isNaN(parseFloat(h))&&isFinite(h)}var a=true;function c(){var h={school_name:""};h.site_id=f('[name="school_url"]').val();h.order_id="";h.ct=f('[name="ct"]').val();f.post("/ajax/checkSiteId",h,function(j){var k=f('[name="school_url"]').parent().next(".help-block");if(!j.valid){f('[name="school_url"]').closest(".form-group").addClass("has-error");if(k.length==0){k=f('<div class="help-block"></div>').insertAfter(f('[name="school_url"]').parent())}k.text("This URL is not available, please try another");f('[name="school_url"]').focus();a=false}else{f('[name="school_url"]').closest(".form-group").removeClass("has-error");k.empty();a=true}},"json")}var e=false;function b(){if(e){return false}e=true;f(".form-group.has-error").removeClass("has-error").find(".help-block").remove();var j=f('[name="school_name"]').val();var p=f('[name="school_url"]').val();var k=f('[name="phone"]').val();var l=f('[name="contact_first_name"]').val();var m=f('[name="contact_last_name"]').val();var q=f('[name="contact_email"]').val();var h=f('[name="financial_first_name"]').val();var r=f('[name="financial_last_name"]').val();var o=f('[name="financial_email"]').val();var n=[];if(j==""){n.push({field:"school_name",message:"Please enter your school name"})}else{if(j.search(/["<>\%]/)>=0){n.push({field:"school_name",message:"The school name contains invalid characters"})}}if(p==""){n.push({field:"school_url",message:"Please assign a URL for your school"})}else{if(p.length<3){n.push({field:"school_url",message:"Please assign a URL for your school with at least 3 characters"})}else{if(!a){n.push({field:"school_url",message:"This URL is not available, please try another"})}}}if(l==""){n.push({field:"contact_first_name",message:"Please enter your first name"})}if(m==""){n.push({field:"contact_last_name",message:"Please enter your last name"})}if(q==""){n.push({field:"contact_email",message:"Please enter your email address"})}else{if(!q.match(/^([\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+\.)*[\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+@((((([a-z0-9]{1}[a-z0-9\-]{0,62}[a-z0-9]{1})|[a-z])\.)+[a-z]{2,6})|(\d{1,3}\.){3}\d{1,3}(\:\d{1,5})?)$/i)){n.push({field:"contact_email",message:"Please enter a valid email address"})}}if(k==""){n.push({field:"phone",message:"Please enter your phone number"})}if(h==""){n.push({field:"financial_first_name",message:"Please enter your first name"})}if(r==""){n.push({field:"financial_last_name",message:"Please enter your last name"})}if(o==""){n.push({field:"financial_email",message:"Please enter your email address"})}else{if(!o.match(/^([\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+\.)*[\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+@((((([a-z0-9]{1}[a-z0-9\-]{0,62}[a-z0-9]{1})|[a-z])\.)+[a-z]{2,6})|(\d{1,3}\.){3}\d{1,3}(\:\d{1,5})?)$/i)){n.push({field:"financial_email",message:"Please enter a valid email address"})}}for(i=0;i<n.length;i++){f('[name="'+n[i].field+'"]').closest(".form-group").addClass("has-error").find("> div").first().append(f('<div class="help-block"></div>').text(n[i].message))}if(n.length>0){f('[name="'+n[0].field+'"]').focus();e=false;return false}else{return true}}function g(){if(!b()){return false}f("#order-processing").modal("show");f(this).trigger("formBeforeSubmit");return true}f("#btn-copy-contact").on("click",function(h){h.preventDefault();f('[name="financial_first_name"]').val(f('[name="contact_first_name"]').val());f('[name="financial_last_name"]').val(f('[name="contact_last_name"]').val());f('[name="financial_email"]').val(f('[name="contact_email"]').val())});f('[name="school_url"]').on("change",c).on("keydown paste",function(j){if(j.which&&j.which<48){return}var h=this;setTimeout(function(){var k=f(h).val(),l=/[^a-zA-Z0-9]/;if(l.test(k)){f(h).val(k.replace(/[^a-zA-Z0-9]/g,""))}},0)});f("#order-form").on("submit",g)})(jQuery);
