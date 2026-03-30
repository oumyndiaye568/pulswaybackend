/**
 * Script pour supprimer un patient de la base de données Aiven production
 * Usage: AIVEN_DATABASE_URL="mysql://..." node src/scripts/deletePatientProd.js
 * 
 * Pour tester en local, crée un fichier .env.local avec :
 * AIVEN_DATABASE_URL=mysql://avnadmin:TON_MOT_DE_PASSE@...
 */

const mysql = require('mysql2/promise');

// URL de la base de données Aiven - lire depuis variable d'environnement
const DATABASE_URL = process.env.AIVEN_DATABASE_URL

if (!DATABASE_URL) {
  console.error('❌ Erreur: La variable AIVEN_DATABASE_URL n est pas définie')
  console.log('Pour le développement local, crée un fichier .env.local avec :')
  console.log('AIVEN_DATABASE_URL=mysql://avnadmin:TON_MOT_DE_PASSE@host:port/database')
  process.exit(1)
}

async function deletePatientProduction() {
  const telephone = process.argv[2] || "772904307"

  try {
    console.log('🔌 Connexion à la base de données Aiven...')
    
    const connection = await mysql.createConnection(DATABASE_URL)

    // Chercher le patient par téléphone
    const [users] = await connection.execute(
      'SELECT * FROM User WHERE telephone = ?',
      [telephone]
    )

    if (users.length === 0) {
      console.log('❌ Aucun patient trouvé avec le numéro:', telephone)
      await connection.end()
      return
    }

    const user = users[0]
    console.log('✅ Patient trouvé:')
    console.log('   - User ID:', user.id)
    console.log('   - Téléphone:', user.telephone)

    // Supprimer le patient (il aura une relation avec la table Patient)
    // D'abord supprimer le patient
    await connection.execute(
      'DELETE FROM Patient WHERE userId = ?',
      [user.id]
    )
    
    // Ensuite supprimer l'utilisateur
    await connection.execute(
      'DELETE FROM User WHERE id = ?',
      [user.id]
    )

    console.log('🗑️ Patient supprimé avec succès!')
    
    await connection.end()

  } catch (error) {
    console.error('❌ Erreur:', error.message)
  }
}

deletePatientProduction()
