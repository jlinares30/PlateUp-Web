/**
 * Configuración de distribución de PlateUp
 * 
 * Permite alternar fácilmente entre la fase actual de pruebas cerradas en Google Play (Closed Testing)
 * y el futuro lanzamiento público en Google Play Store sin rehacer la arquitectura ni los enlaces.
 */

export interface DistributionConfig {
	mode: 'closed_testing' | 'public_release';
	closedTesting: {
		googleGroupUrl: string;
		joinOnWebUrl: string;
	};
	publicRelease: {
		googlePlayStoreUrl: string;
	};
}

export const distributionConfig: DistributionConfig = {
	// Cambiar a 'public_release' cuando PlateUp se publique oficialmente en Google Play
	mode: 'closed_testing',

	closedTesting: {
		// Paso 1: Grupo de Google para dar de alta a los testers
		googleGroupUrl: 'https://groups.google.com/g/plateup-testers',
		// Paso 2: Enlace de participación "Join on the web" de Google Play Console
		joinOnWebUrl: 'https://play.google.com/apps/testing/com.jorge.plateup',
	},

	publicRelease: {
		// Enlace oficial de la ficha pública de Google Play Store (para producción)
		googlePlayStoreUrl: 'https://play.google.com/store/apps/details?id=com.jorge.plateup',
	},
};
