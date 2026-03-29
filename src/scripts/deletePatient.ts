/**
 * Script pour supprimer un patient par son numéro de téléphone
 * Usage: npx tsx src/scripts/deletePatient.ts <telephone>
 */

import { prisma } from '../prismaClient'

async function deletePatient(telephone: string) {
  try {
    // Normaliser le numéro (enlever les espaces)
    const normalizedPhone = telephone.replace(/\s+/g, '')

    console.log(`🔍 Recherche du patient avec le téléphone: ${normalizedPhone}`)

    // Chercher le patient par téléphone
    const user = await prisma.user.findFirst({
      where: {
        telephone: normalizedPhone
      },
      include: {
        patient: true
      }
    })

    if (!user) {
      console.log('❌ Aucun patient trouvé avec ce numéro')
      return
    }

    console.log(`✅ Patient trouvé:`)
    console.log(`   - ID: ${user.id}`)
    console.log(`   - Téléphone: ${user.telephone}`)
    console.log(`   - Patient ID: ${user.patient?.id}`)

    // Supprimer le patient et l'utilisateur (en cascade via Prisma)
    await prisma.user.delete({
      where: { id: user.id }
    })

    console.log('🗑️ Patient supprimé avec succès!')

  } catch (error) {
    console.error('❌ Erreur:', error)
  } finally {
    await prisma.$disconnect()
  }
}

// Récupérer le numéro depuis les arguments
const telephone = process.argv[2]

if (!telephone) {
  console.log('Usage: npx tsx src/scripts/deletePatient.ts <telephone>')
  console.log('Exemple: npx tsx src/scripts/deletePatient.ts 772904307')
  process.exit(1)
}

deletePatient(telephone)
