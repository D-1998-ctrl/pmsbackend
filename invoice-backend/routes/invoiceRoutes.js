const express = require('express')
const router = express.Router()

const { getInvoices, getInvoice, createInvoice, deleteInvoice, updateInvoice, getInvoiceList, getInvoiceListbyid,getInvoiceListByAccountId } = require('../controller/invoiceController')



router.get('/invoice', getInvoices)
router.get('/invoice/:id', getInvoice)
router.post('/invoice', createInvoice)
router.delete('/invoice/:id', deleteInvoice)
router.patch('/invoice/:id', updateInvoice)
router.get('/invoice/invoicelist', getInvoiceList)
router.get('/invoice/invoicelist/invoicelistbyid/:id', getInvoiceListbyid)
router.get('/invoice/invoicelist/getInvoiceListByAccountId/:id',getInvoiceListByAccountId)


module.exports = router