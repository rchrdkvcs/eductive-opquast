<script lang="ts" setup>
import { ref } from 'vue'
import type { NavigationMenuItem } from '@nuxt/ui'
import Logo from '~/components/icones/logo.vue'

const items = ref<NavigationMenuItem[]>([
  {
    label: 'Accueil',
    icon: 'lucide:house',
    to: '/',
  },
  {
    label: 'Portes Ouvertes',
    icon: 'lucide:door-open',
    children: [
      {
        label: 'Calendrier',
        icon: 'lucide:calendar',
        description: 'Consulter le calendrier des portes ouvertes.',
        to: '/portes-ouvertes/calendrier',
      },
      {
        label: 'Inscription',
        icon: 'lucide:check-square',
        description: "S'inscrire aux portes ouvertes.",
        to: '/portes-ouvertes/inscription',
      },
      {
        label: 'FAQ',
        icon: 'lucide:help-circle',
        description: 'Consulter la FAQ des portes ouvertes.',
        to: '/portes-ouvertes/faq',
      },
    ],
  },
  {
    label: 'Brochures',
    icon: 'lucide:file-text',
    children: [
      {
        label: 'Maestris BTS',
        icon: 'lucide:file-text',
      },
      {
        label: 'ESGI',
        icon: 'lucide:file-text',
      },
      {
        label: 'EFAB',
        icon: 'lucide:file-text',
      },
      {
        label: 'EIML',
        icon: 'lucide:file-text',
      },
      {
        label: 'PPA',
        icon: 'lucide:file-text',
      },
    ],
  },
])
</script>

<template>
  <UApp>
    <div class="w-full sticky top-0 z-10 h-16 border-b border-gray-100 bg-white">
      <UNavigationMenu
        :items="items"
        variant="link"
        color="secondary"
        contentOrientation="vertical"
        class="w-full max-w-7xl mx-auto justify-between"
      >
        <template #list-leading>
          <Logo class="h-16" />
        </template>

        <template #list-trailing>
          <UButton
            label="Je m'inscrit"
            color="secondary"
            class="rounded-full"
            size="lg"
            to="/inscription"
          />
        </template>
      </UNavigationMenu>
    </div>

    <slot />

    <footer class="w-full bg-[#20284F] flex flex-col py-8">
      <div class="max-w-7xl w-full mx-auto space-y-8">
        <div class="flex items-center justify-between">
          <Logo class="size-32 text-white" />

          <div class="flex gap-8 items-start text-sm">
            <ul class="flex flex-col gap-1">
              <li class="font-semibold text-white">En savoir plus</li>
              <li>
                <ULink to="#" class="text-white/75 hover:text-secondary">Handicap</ULink>
              </li>
              <li>
                <ULink to="#" class="text-white/75 hover:text-secondary">Accessibilité</ULink>
              </li>
              <li>
                <ULink to="#" class="text-white/75 hover:text-secondary">Notice VAE</ULink>
              </li>
              <li>
                <ULink to="#" class="text-white/75 hover:text-secondary">Demande VAE</ULink>
              </li>
            </ul>

            <ul class="flex flex-col gap-1">
              <li class="font-semibold text-white">Rester Informer</li>
              <li>
                <ULink to="#" class="text-white/75 hover:text-secondary">Facebook</ULink>
              </li>
              <li>
                <ULink to="#" class="text-white/75 hover:text-secondary">Instagram</ULink>
              </li>
              <li>
                <ULink to="#" class="text-white/75 hover:text-secondary">LinkedIn</ULink>
              </li>
              <li>
                <ULink to="#" class="text-white/75 hover:text-secondary">TikTok</ULink>
              </li>
            </ul>

            <ul class="flex flex-col gap-1">
              <li class="font-semibold text-white">Navigation</li>
              <li>
                <ULink to="#" class="text-white/75 hover:text-secondary">Accueil</ULink>
              </li>
              <li>
                <ULink to="#" class="text-white/75 hover:text-secondary">Candidatures</ULink>
              </li>
              <li>
                <ULink to="#" class="text-white/75 hover:text-secondary">Portes Ouvertes</ULink>
              </li>
              <li>
                <ULink to="#" class="text-white/75 hover:text-secondary">Documentation</ULink>
              </li>
            </ul>

            <ul class="flex flex-col gap-1">
              <li class="font-semibold text-white">Reglementations</li>
              <li>
                <ULink to="#" class="text-white/75 hover:text-secondary">Mentions Legales</ULink>
              </li>
              <li>
                <ULink to="#" class="text-white/75 hover:text-secondary">CGI</ULink>
              </li>
              <li>
                <ULink to="#" class="text-white/75 hover:text-secondary">CGV</ULink>
              </li>
            </ul>

            <ul class="flex flex-col gap-1">
              <li class="font-semibold text-white">Contact</li>
              <li class="text-white/75">
                <p>Tel: 02 19 13 90 01</p>
                <p>Mail: rennes@eductive.fr</p>
              </li>
              <li class="text-white/75">
                <p>
                  Campus Eductive Rennes <br />
                  14 Rue du bourg nouveau <br />
                  35000 Rennes
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div class="w-full text-center text-white/50">
          <p>Copyright 2025 © Eductive Group</p>
          <p>Tous droits réservés</p>
        </div>
      </div>
    </footer>
  </UApp>
</template>
