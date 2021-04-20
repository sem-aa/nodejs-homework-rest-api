const express = require('express')
const router = express.Router()
const Contacts = require('../../model/index')
const {validCreateContact, validUpdateContact} = require('./valid-contacts')



router.get('/', async (req, res, next) => {
  try {
    const contacts = await Contacts.listContacts()
    return res.json({
      status: "success",
      code: 200,
      data: {
  contacts
}
    })
  } catch (e){next(e)}
  
})

router.get('/:contactId', async (req, res, next) => {
  try {
    const contact = await Contacts.getContactById(req.params.contactId)
    if (contact) {
      return res.json({
        status: 'success',
        code: 200,
        data: {
          contact,
        }
      })
    } else {
      return res.status(404).json({
        status: 'error',
        code: 404,
        data: 'Not found contact'
      })
    }
  } catch(e){next(e)}
})



router.post('/',validCreateContact, async (req, res, next) => {
   try {
    const contact = await Contacts.addContact(req.body)
    return res.status(201).json({
      status: "success",
      code: 201,
      data: {
  contact
}
    })
  } catch (e){next(e)}
})

router.delete('/:contactId', async (req, res, next) => {
   try {
    const contact = await Contacts.removeContact(req.params.contactId)
    if (contact) {
      return res.json({
        status: 'success',
        code: 200,
        data: {
          contact,
        }
      })
    } else {
      return res.status(404).json({
        status: 'error',
        code: 404,
        data: 'Not found contact'
      })
    }
  } catch(e){next(e);}
})

router.patch('/:contactId',validUpdateContact, async (req, res, next) => {
  try {
    const contact = await Contacts.updateContact(req.params.contactId, req.body)
    if (contact) {
      return res.json({
        status: 'success',
        code: 200,
        data: {
          contact,
        }
      })
    } else {
      return res.status(404).json({
        status: 'error',
        code: 404,
        data: 'Not found contact'
      })
    }
  } catch(e){next(e);}
})

router.put('/:contactId',validUpdateContact, async (req, res, next) => {
  try {
    const contact = await Contacts.updateContact(req.params.contactId, req.body)
    if (contact) {
      return res.json({
        status: 'success',
        code: 200,
        data: {
          contact,
        }
      })
    } else {
      return res.status(404).json({
        status: 'error',
        code: 404,
        data: 'Not found contact'
      })
    }
  } catch(e){next(e);}
})
module.exports = router
