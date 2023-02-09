export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['Buen Trabajo', 'Muy Bien', 'Oso Ondo!']
export const GAME_COPIED_MESSAGE = 'Juego copiado al portapapeles'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Letras insuficientes'
export const WORD_NOT_FOUND_MESSAGE = 'Palabra no encontrada'
export const HARD_MODE_ALERT_MESSAGE =
  'El modo dificil solo se puede seleccionar desde el inicio'
export const HARD_MODE_DESCRIPTION =
  'Las pistas dscubiertas en intentos anteriores deben ser usadas en los posteriores'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'Para una forma visual mejorada'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `The word was ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Debes usar: ${guess} en la posicion: ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `El intentento debe contener: ${letter}`
export const ENTER_TEXT = 'Enter'
export const DELETE_TEXT = 'Eliminar'
export const STATISTICS_TITLE = 'Estadisticas'
export const GUESS_DISTRIBUTION_TEXT = 'Distribucion de intentos'
export const NEW_WORD_TEXT = 'Nueva palabra en:'
export const SHARE_TEXT = 'Compartir'
export const SHARE_FAILURE_TEXT =
  'Para compartir los resultados se necesita HTTPS'
export const MIGRATE_BUTTON_TEXT = 'Transferir'
export const MIGRATE_DESCRIPTION_TEXT =
  'Migrar estadisticas a un nuevo dispositivo'
export const TOTAL_TRIES_TEXT = 'Intentos totales'
export const SUCCESS_RATE_TEXT = 'Tasa de acierto'
export const CURRENT_STREAK_TEXT = 'Racha actual'
export const BEST_STREAK_TEXT = 'Mejor Racha'
export const DISCOURAGE_INAPP_BROWSER_TEXT =
  "Si usas un navegador embebido puedes tener problemas usando la aplicacion."

export const DATEPICKER_TITLE = 'Selecciona una fecha anterior'
export const DATEPICKER_CHOOSE_TEXT = 'Selecciona'
export const DATEPICKER_TODAY_TEXT = 'hoy'
export const ARCHIVE_GAMEDATE_TEXT = 'Fecha del juego'
