import {Router} from "express";

const router = Router();

import { getList,getElement,addElement,updateElement } from "../controllers/procedures.controller";


router.route('/').get
    (getList );
router.route('/:id').get
    (getElement);
router.route('/').post
    (addElement);
router.route('/:id').put
    (updateElement);

export default router;