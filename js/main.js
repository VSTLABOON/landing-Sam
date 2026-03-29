// ─── MAIN ENTRY POINT ────────────────────────────────────────
import { meta, universoItems, musicItems, traits, hobbies, colores, carta } from './data/Samara.js'
import { initCursor }    from './modules/cursor.js'
import { initNav }       from './modules/nav.js'
import { initAnimations} from './modules/animations.js'
import { initPetals }    from './modules/petals.js'
import { initModal }     from './modules/modal.js'
import {
  renderUniverso,
  renderMusic,
  renderTraits,
  renderHobbies,
  renderColores,
  renderCarta,
} from './modules/renderer.js'

document.addEventListener('DOMContentLoaded', () => {
  // Set meta content
  const nameEl = document.querySelector('.hero-name-text')
  if (nameEl) nameEl.textContent = meta.nombre

  // Render sections from data
  renderUniverso(universoItems, 'universo-track')
  renderMusic(musicItems,       'music-list')
  renderTraits(traits,          'traits-list')
  renderHobbies(hobbies,        'hobbies-parallax-wrapper')
  renderColores(colores,        'colores-swatches')
  renderCarta(carta,            'carta-content')

  // Init behaviors (order matters)
  initModal()       // first — registers event delegation
  initNav()
  initAnimations()  // after render so all .reveal elements exist
  initPetals()
  initCursor()
})