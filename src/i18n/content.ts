export interface FeatureItem {
	title: string;
	tag: string;
	description: string;
	icon: string;
	badgeColor: string;
	textColor: string;
}

export interface StepItem {
	number: string;
	title: string;
	desc: string;
}

export interface FaqItem {
	q: string;
	a: string;
}

export const contentData = {
	en: {
		coreFeatures: [
			{
				title: "Intuitive Weekly Planner",
				tag: "Smart Scheduling",
				description:
					"Effortlessly map out breakfasts, lunches, dinners, and snacks in minutes. Eliminate decision fatigue once and for all.",
				icon: "calendar",
				badgeColor: "rgba(16, 185, 129, 0.15)",
				textColor: "#34d399",
			},
			{
				title: "Smart Ingredient Match & % Ranking",
				tag: "Zero Waste Tech",
				description:
					"Select ingredients in your kitchen and PlateUp ranks recipes by completion percentage, showing you exactly what you can cook right now.",
				icon: "filter",
				badgeColor: "rgba(16, 185, 129, 0.18)",
				textColor: "#34d399",
			},
			{
				title: "Recipe Vault & Custom Studio",
				tag: "Flavor & Cloud Sync",
				description:
					"Explore curated balanced recipes, or upload your own creations with custom photos, macro calculations, and step-by-step guides.",
				icon: "chef",
				badgeColor: "rgba(245, 158, 11, 0.15)",
				textColor: "#fbbf24",
			},
			{
				title: "Automated Grocery List",
				tag: "Aisle-Organized",
				description:
					"Instantly compile your weekly meals into an organized shopping checklist with 1-tap check-ins directly into your pantry.",
				icon: "cart",
				badgeColor: "rgba(139, 92, 246, 0.15)",
				textColor: "#a78bfa",
			},
			{
				title: "Pantry & Waste Reduction",
				tag: "Save Money",
				description:
					"Track pantry stocks so you never buy duplicates. Cook with ingredients you already have before they expire.",
				icon: "fridge",
				badgeColor: "rgba(59, 130, 246, 0.15)",
				textColor: "#60a5fa",
			},
			{
				title: "100% Offline Accessible",
				tag: "Fast & Reliable",
				description:
					"Access your meal plan and grocery checklist anywhere, even with zero network connection while inside grocery aisles.",
				icon: "lightning",
				badgeColor: "rgba(20, 184, 166, 0.15)",
				textColor: "#2dd4bf",
			},
		] as FeatureItem[],

		steps: [
			{
				number: "01",
				title: "Plan Your Week in Minutes",
				desc: "Select meals that match your dietary goals and lifestyle preferences with intuitive drag-and-drop calendars.",
			},
			{
				number: "02",
				title: "Generate Smart Shopping Lists",
				desc: "PlateUp bundles ingredients automatically, checking off items you already have stored in your home pantry.",
			},
			{
				number: "03",
				title: "Cook Stress-Free & Eat Better",
				desc: "Follow crystal-clear, step-by-step instructions and enjoy wholesome nutrition without dinner dilemmas.",
			},
		] as StepItem[],

		faqs: [
			{
				q: "Is PlateUp free to use?",
				a: "Yes! The Android release is completely free to download and use for your daily meal planning, recipe catalog, and grocery shopping.",
			},
			{
				q: "Can I add my own custom recipes?",
				a: "Absolutely. PlateUp includes a full recipe creation studio allowing you to add ingredients, instructions, cooking times, and photos.",
			},
			{
				q: "How does the shopping list integrate with my meal plan?",
				a: "Whenever you schedule meals for the week, PlateUp compiles all necessary ingredients into a categorized grocery checklist with a single tap.",
			},
			{
				q: "How can I join the PlateUp beta on Google Play?",
				a: "It's very easy: 1) Join our Google Groups testers community using your Google account, and 2) Accept the testing invitation and install the app directly from Google Play.",
			},
		] as FaqItem[],
	},

	es: {
		coreFeatures: [
			{
				title: "Planificador Semanal Intuitivo",
				tag: "Horario Inteligente",
				description:
					"Organiza desayunos, almuerzos, cenas y meriendas en cuestión de minutos. Despídete de la indecisión al cocinar.",
				icon: "calendar",
				badgeColor: "rgba(16, 185, 129, 0.15)",
				textColor: "#34d399",
			},
			{
				title: "Coincidencia de Ingredientes y Ranking %",
				tag: "Cero Desperdicio",
				description:
					"Selecciona los ingredientes que tienes en casa y PlateUp ordenará recetas según el porcentaje que puedes preparar de inmediato.",
				icon: "filter",
				badgeColor: "rgba(16, 185, 129, 0.18)",
				textColor: "#34d399",
			},
			{
				title: "Catálogo y Estudio de Recetas",
				tag: "Sabor y Nube",
				description:
					"Descubre recetas equilibradas o crea tus propios platos con fotos personalizadas, cálculo de macros y pasos detallados.",
				icon: "chef",
				badgeColor: "rgba(245, 158, 11, 0.15)",
				textColor: "#fbbf24",
			},
			{
				title: "Lista de Compras Automatizada",
				tag: "Organizada por Pasillo",
				description:
					"Compila tus comidas de la semana en una lista de compras categorizada con actualización en un toque hacia tu despensa.",
				icon: "cart",
				badgeColor: "rgba(139, 92, 246, 0.15)",
				textColor: "#a78bfa",
			},
			{
				title: "Control de Despensa y Ahorro",
				tag: "Ahorra Dinero",
				description:
					"Lleva control de tus existencias para no comprar de más. Cocina con lo que ya tienes antes de que caduque.",
				icon: "fridge",
				badgeColor: "rgba(59, 130, 246, 0.15)",
				textColor: "#60a5fa",
			},
			{
				title: "100% Funcional Sin Conexión",
				tag: "Rápido y Confiable",
				description:
					"Accede a tu plan semanal y lista de compras en cualquier lugar, incluso sin cobertura dentro del supermercado.",
				icon: "lightning",
				badgeColor: "rgba(20, 184, 166, 0.15)",
				textColor: "#2dd4bf",
			},
		] as FeatureItem[],

		steps: [
			{
				number: "01",
				title: "Planifica tu Semana en Minutos",
				desc: "Elige platos acordes a tus objetivos nutricionales y estilo de vida con un calendario intuitivo y ágil.",
			},
			{
				number: "02",
				title: "Genera Listas de Compras Inteligentes",
				desc: "PlateUp agrupa ingredientes automáticamente descontando aquellos que ya tienes en tu despensa.",
			},
			{
				number: "03",
				title: "Cocina Sin Estrés y Come Mejor",
				desc: "Sigue instrucciones paso a paso y disfruta de comida casera saludable sin complicaciones diarias.",
			},
		] as StepItem[],

		faqs: [
			{
				q: "¿PlateUp es completamente gratis?",
				a: "¡Sí! La versión para Android es totalmente gratuita para planificar comidas, consultar recetas y gestionar tus compras.",
			},
			{
				q: "¿Puedo agregar mis propias recetas personalizadas?",
				a: "Por supuesto. PlateUp incluye un estudio de creación que te permite ingresar ingredientes, instrucciones, tiempos y fotografías.",
			},
			{
				q: "¿Cómo se integra la lista de compras con el plan de comidas?",
				a: "Al programar tus platos de la semana, PlateUp agrupa todos los ingredientes requeridos en una lista clasificada con un solo toque.",
			},
			{
				q: "¿Cómo puedo unirme a la beta de PlateUp en Google Play?",
				a: "Es muy fácil: 1) Únete a nuestra comunidad de testers en Google Groups con tu cuenta de Google, y 2) Acepta la invitación de prueba e instala la app directamente desde Google Play.",
			},
		] as FaqItem[],
	},
};
