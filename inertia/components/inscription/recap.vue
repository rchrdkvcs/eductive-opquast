<script setup lang="ts">
defineProps<{
  data: {
    [key: string]: any
  }
}>()
</script>

<template>
  <div class="h-fit w-1/2 mx-auto flex flex-col justify-start items-center gap-4">
    <h2 class="text-xl font-semibold text-center my-4">Récapitulatif de votre inscription</h2>

    <div class="w-full flex flex-col justify-start items-start gap-2">
      <USeparator label="Formation" class="my-2" />
      <p><strong>Formation:</strong> {{ data.formation }}</p>
      <p><strong>Domaine:</strong> {{ data.domaine }}</p>
      <p><strong>Ecole:</strong> {{ data.ecole }}</p>
      <p><strong>Date de rentree souhaiter:</strong> {{ data.dateDeRentre }}</p>

      <USeparator label="Informations personnelles" class="my-2" />
      <p><strong>Nom:</strong> {{ data.nom }}</p>
      <p><strong>Prénom:</strong> {{ data.prenom }}</p>
      <p><strong>Carte d'identité:</strong> {{ data.cni }}</p>
      <p><strong>Genre:</strong> {{ data.genre }}</p>
      <p><strong>Lieu de naissance:</strong> {{ data.paysNaissance }}</p>
      <p><strong>Nationalité:</strong> {{ data.nationalite }}</p>
      <p><strong>Numéro de sécurité sociale:</strong> {{ data.secu }}</p>
      <p><strong>Numéro étudiant:</strong> {{ data.numeroEtudiant }}</p>

      <USeparator label="Coordonnées" class="my-2" />
      <p><strong>Adresse e-mail:</strong> {{ data.email }}</p>
      <p><strong>Téléphone:</strong> {{ data.portable }}</p>
      <p><strong>Fixe:</strong> {{ data.fixe }}</p>
      <p><strong>Pays de residence:</strong> {{ data.paysResidence }}</p>
      <p><strong>Code Postal:</strong> {{ data.codePostal }}</p>
      <p><strong>Ville:</strong> {{ data.ville }}</p>
      <p><strong>Rue:</strong> {{ data.rue }}</p>
      <p><strong>Justificatif de domicile:</strong> {{ data.justifDomicile }}</p>
      <p><strong>Zone géographique:</strong> {{ data.zoneGeo }}</p>
      <p><strong>Temps de transport estimé:</strong> {{ data.tempsTransport }}</p>

      <USeparator label="Situation familiale" class="my-2" />
      <p><strong>Situation:</strong> {{ data.situation }}</p>

      <USeparator label="Responsables légal" class="my-2" />
      <p><strong>Nom et Prenom:</strong> {{ data.respName }}</p>
      <p><strong>Lien:</strong> {{ data.respLien }}</p>
      <p><strong>Telephone:</strong> {{ data.respTel }}</p>
      <p><strong>E-mail:</strong> {{ data.respEmail }}</p>

      <USeparator label="Académie" class="my-2" />
      <p><strong>Dernier diplôme obtenu:</strong> {{ data.dernierDiplome }}</p>
      <p><strong>Année d’obtention du diplôme:</strong> {{ data.anneDiplome }}</p>
      <p><strong>Copie du diplôme:</strong> {{ data.copieDiplome }}</p>
      <p><strong>Nom:</strong> {{ data.nomEcole }}</p>
      <p><strong>Ville:</strong> {{ data.nomVille }}</p>

      <USeparator label="Profession" class="my-2" />
      <p><strong>Statut actuelle:</strong> {{ data.statutPro }}</p>
      <p><strong>Poste:</strong> {{ data.poste }}</p>
      <p><strong>Entreprise:</strong> {{ data.entreprise }}</p>
      <p><strong>Période:</strong> {{ data.periode }}</p>
      <p><strong>Curriculum Vitae:</strong> {{ data.cv }}</p>
      <p><strong>Lettre de motivation:</strong> {{ data.ldm }}</p>

      <USeparator label="Financement et Aides" class="my-2" />
      <p><strong>Mode de financement:</strong> {{ data.modeFinance }}</p>
      <p><strong>Nom du payeur:</strong> {{ data.nomPayeur }}</p>
      <p><strong>Justificatif:</strong> {{ data.justifFinance }}</p>
    </div>
  </div>
</template>

<style scoped></style>
