jQuery(document).ready( function($) {

	var ecCheckbox        = $( '#woocommerce_google_analytics_ga_enhanced_ecommerce_tracking_enabled' );
	var uaCheckbox        = $( '#woocommerce_google_analytics_ga_use_universal_analytics' );
	var gtagCheckbox      = $( '#woocommerce_google_analytics_ga_gtag_enabled' );

	updateToggles();

	ecCheckbox.change(updateToggles);
	uaCheckbox.change(updateToggles);
	gtagCheckbox.change(updateToggles);

	function updateToggles() {
		var isEnhancedEcommerce  = ( true === ecCheckbox.is( ':checked' ) );
		var isUniversalAnalytics = ( true === uaCheckbox.is( ':checked' ) );
		var isGtag               = ( true === gtagCheckbox.is( ':checked' ) );

		// Legacy: gtag NO
		toggleCheckboxRow( $( '.legacy-setting' ), ! isGtag );

		// Enhanced settings: Enhanced YES, universal YES, gtag NO
		toggleCheckboxRow( $( '.enhanced-setting' ), isEnhancedEcommerce && isUniversalAnalytics && ! isGtag );

		// Enhanced toggle: universal YES, gtag NO
		toggleCheckboxRow( ecCheckbox, isUniversalAnalytics && ! isGtag );

		// Universal toggle: gtag NO
		toggleCheckboxRow( uaCheckbox, ! isGtag );

	}

	function toggleCheckboxRow ( row, isVisible ) {
		if ( isVisible ) {
			row.closest('tr').show();
		} else {
			row.closest('tr').hide();
		}
	}
} );


