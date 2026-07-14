import { Component, signal, computed, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideHome, LucideUser, LucideCode, LucideMail, LucideExternalLink, LucideTerminal, LucideCpu, LucideGlobe, LucideSun, LucideMoon, LucideZap } from '@lucide/angular';
import * as AOS from 'aos';
import { Lang, TRANSLATIONS } from './translations';

const THEME_STORAGE_KEY = 'rypsk-theme';
const LANG_STORAGE_KEY = 'rypsk-lang';
export const CONTACT_EMAIL = 'info@rypsk.com';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    LucideHome,
    LucideUser,
    LucideCode,
    LucideMail,
    LucideExternalLink,
    LucideTerminal,
    LucideCpu,
    LucideGlobe,
    LucideSun,
    LucideMoon,
    LucideZap
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('rypsk.com');
  protected readonly menuOpen = signal(false);
  protected readonly theme = signal<'rypsk' | 'rypsk-light'>('rypsk');
  protected readonly lang = signal<Lang>('es');
  protected readonly t = computed(() => TRANSLATIONS[this.lang()]);
  protected readonly contactEmail = CONTACT_EMAIL;

  protected readonly contactName = signal('');
  protected readonly contactEmailInput = signal('');
  protected readonly contactMessage = signal('');

  ngOnInit() {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });

    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === 'rypsk' || stored === 'rypsk-light') {
      this.theme.set(stored);
    } else {
      const prefersLight = window.matchMedia?.('(prefers-color-scheme: light)').matches;
      this.theme.set(prefersLight ? 'rypsk-light' : 'rypsk');
    }

    const storedLang = localStorage.getItem(LANG_STORAGE_KEY);
    if (storedLang === 'es' || storedLang === 'en') {
      this.lang.set(storedLang);
    } else {
      const browserLang = navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en';
      this.lang.set(browserLang);
    }
  }

  toggleMenu() {
    this.menuOpen.update((open) => !open);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }

  toggleTheme() {
    this.theme.update((current) => (current === 'rypsk' ? 'rypsk-light' : 'rypsk'));
    localStorage.setItem(THEME_STORAGE_KEY, this.theme());
  }

  toggleLang() {
    this.lang.update((current) => (current === 'es' ? 'en' : 'es'));
    localStorage.setItem(LANG_STORAGE_KEY, this.lang());
  }

  sendEmail() {
    const name = this.contactName().trim();
    const from = this.contactEmailInput().trim();
    const message = this.contactMessage().trim();

    const subject = name ? `Contacto desde rypsk.com — ${name}` : 'Contacto desde rypsk.com';
    const bodyLines = [
      name ? `Nombre: ${name}` : null,
      from ? `Email: ${from}` : null,
      '',
      message,
    ].filter((line) => line !== null);

    const body = bodyLines.join('\n');
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  }
}
