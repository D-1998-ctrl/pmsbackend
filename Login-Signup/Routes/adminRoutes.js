const express = require('express')
const router = express.Router()

const { upload } = require('../middlewares/uploadfile');
const { createAdmin, getAdmins, getAdmin, deleteAdmin, updateAdmin, updatePassword, getAdminByEmail } = require('../Controller/adminSignupController')
 const { createAccount, getAccount, getAccounts, updateAccount, deleteAccount, getAccountsList, getAccountsListById,getAccountListByUserId } = require('../Controller/accountDetailsController')
const { createTeamMember, getTeamMembers, getTeamMember, deleteTeamMember, updateTeamMember, getTeamMemberList, updateTeamMemberPassword } = require('../Controller/teamMemberController')
const { getClients, getClient, createClient, deleteClient, updateClient, getClientByEmail, updateclientPassword } = require('../Controller/clientSignupController')
const { createNotification, getNotifications, getNotification, deleteNotification, updateNotification, getNotificationbyUser } = require('../Controller/adminNotificationController')

//*******************ADMIN SIGNUP START********************* */
router.get('/adminsignup', getAdmins)
router.get('/adminsignup/:id', getAdmin)
router.post('/adminsignup', createAdmin)
router.delete('/adminsignup/:id', deleteAdmin)
router.patch('/adminsignup/:id', updateAdmin)
router.get('/adminsignup/adminbyemail/:email', getAdminByEmail)
router.patch('/adminsignup/updatepassword', updatePassword)

//*******************ADMIN SIGNUP END********************* */


//*******************ACCOUNT DETAILS START********************* */
router.get('/accountdetails', getAccounts)
router.get('/accountdetails/:id', getAccount)
router.post('/accountdetails', createAccount)
router.delete('/accountdetails/:id', deleteAccount)
router.patch('/accountdetails/:id', updateAccount)
router.get('/account/accountdetailslist/', getAccountsList)
router.get('/accountdetails/accountdetailslist/listbyid/:id', getAccountsListById)
router.get('/accountdetails/accountdetailslist/listbyuserid/:id',getAccountListByUserId)
//*******************ACCOUNT DETAILS END********************* */

//******Team Member START******** *//
router.get('/teammembers', getTeamMembers)
router.get('/teammember/:id', getTeamMember)
 
router.patch('/teammember/:id', upload.single('ProfilePicture'), updateTeamMember)
router.post('/teammember', upload.single('ProfilePicture'), createTeamMember)
 
// router.post('/teammember', createTeamMember)
router.delete('/teammember/:id', deleteTeamMember)
// router.patch('/teammember/:id',  updateTeamMember)
router.get('/teammember/teammemberlist/list/:value', getTeamMemberList)
router.patch('/teammember/updateTeamMemberPassword', updateTeamMemberPassword)

//******Team Member END******** */

//******client SIGNUP START******** */
router.get('/clientsignup', getClients)
router.get('/clientsignup/:id', getClient)
router.post('/clientsignup', createClient)
router.delete('/clientsignup/:id', deleteClient)
router.patch('/clientsignup/:id', updateClient)
router.get('/clientsignup/clientbyemail/:email', getClientByEmail)
router.patch('/clientsignup/updateclientPassword', updateclientPassword)

//******client SIGNUP END******** */

//******Notification  START******** */
router.get('/notification', getNotifications)
router.get('/notification/:id', getNotification)
router.post('/notification', createNotification)
router.delete('/notification/:id', deleteNotification)
router.patch('/notification/:id', updateNotification)
router.get('/notification/notificationbyuser/:userid', getNotificationbyUser)

//******Notification END******** */


///**************for Profile Picture ***************/




module.exports = router

