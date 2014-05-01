/*
 * jQuery ToggleButton Plugin
 * Author: Ryan Schwartz
 * Version: 1.0.1 (22-FEB-2014)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl-3.0-standalone.html
 */
	
(function($){
	
	// Set methods
	var methods = {
		
		// Initialize
		init : function(options){
				
			// Set default settings if data isn't set yet
			if($(this).data('TBSettings') == null){

				// Set defaults
				var settings = {
					'state'			: 'enabled', 		// [enabled/disabled] Determines if the button is currently in an enabled or disabled state.
					'default_msg'	: $(this).val(),	// [string] If not set, will automatically detect the current button message.
					'loading_msg'	: '', 				// [string] The message to display when the form is loading.  Message will not change if a loading_msg is not provided.
					'loading_class'	: '' 				// [string] Option to provide a custom class when the message is loading.
				};

				// Check for options
				if(options){ 
					$.extend(settings,options);
				}
								
				// Save settings
				$(this).data('TBSettings', settings);
			}
			
			// Get settings
			var settings = $(this).data('TBSettings');
			
			// Toggle state
			settings.state = (settings.state == 'enabled') ? 'disabled' : 'enabled';
			
			// Disabled State actions
			if(settings.state == 'disabled'){
				
				// Disable button
				$(this).attr('disabled','disabled');
				
				// Show custom loading message if applicable
				if(settings.loading_msg != ""){
					$(this).val(settings.loading_msg);
				}
				
				// Add custom class if applicable
				if(settings.loading_class != ""){
					$(this).addClass(settings.loading_class);
				}
			}
			
			// Enabled State actions
			if(settings.state == 'enabled'){
				
				// Enable button
				$(this).attr('disabled',false);
				
				// Set value back to default
				$(this).val(settings.default_msg);
				
				// Remove custom class if applicable
				if(settings.loading_class != ""){
					$(this).removeClass(settings.loading_class);
				}
			}
			
			// Return this for chainability
			return this;
		}
	};
	
	// Declare plugin
	$.fn.ToggleButton = function(method){  
		
		if (methods[method]) {
			return methods[method].apply(this,Array.prototype.slice.call(arguments,1));
		}else if(typeof method === 'object' || ! method) {
			return methods.init.apply(this,arguments);
		}else{
			$.error('Method ' + method + ' does not exist on jQuery.ToggleButton');
		}

	};
})(jQuery);