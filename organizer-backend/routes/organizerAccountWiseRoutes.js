// const express = require('express');
// const {
//     createOrganizerAccountWise,
//     getOrganizerAccountWise,
//     getOrganizerAccountWises,
//     deleteOrganizerAccountWise,
//     getOrganizerByAccountId,
//     updateOrganizerAccountWise,
// } = require('../controller/organizerAccountWiseController'); // Adjust the path as necessary

// const router = express.Router();

// // Get all OrganizerAccountWise
// router.get('/', getOrganizerAccountWises);

// // Get a single OrganizerAccountWise by ID
// router.get('/:id', getOrganizerAccountWise);

// // Create a new OrganizerAccountWise
// router.post('/', createOrganizerAccountWise);

// // Update an existing OrganizerAccountWise by ID
// router.patch('/:id', updateOrganizerAccountWise);

// // Delete a OrganizerAccountWise by ID
// router.delete('/:id', deleteOrganizerAccountWise);

// // Get OrganizerAccountWise by Account ID
// // router.get('/account/:id', getOrganizerByAccountId);
// router.get('/organizeraccountwise/organizerbyaccount/:id', getOrganizerByAccountId)

// module.exports = router;



const express = require('express')
const router = express.Router()

const { getOrganizerAccountWise, getOrganizerAccountWises, createOrganizerAccountWise, deleteOrganizerAccountWise, createOrganizerAccounts, getOrganizerByAccountId, updateOrganizerAccountWise } = require('../controller/organizerAccountWiseController')

//******organizer Accountwise Start******** */

router.get('/organizeraccountwise', getOrganizerAccountWises)
router.get('/organizeraccountwise/:id', getOrganizerAccountWise)
router.post('/organizeraccountwise/org', createOrganizerAccountWise)
router.delete('/organizeraccountwise/:id', deleteOrganizerAccountWise)
router.get('/organizeraccountwise/organizerbyaccount/:id', getOrganizerByAccountId)
router.patch('/organizeraccountwise/:id', updateOrganizerAccountWise)
router.post('/organizeraccountswise/org', createOrganizerAccounts)



//******organizer Accountwise ENd******** */

module.exports = router
