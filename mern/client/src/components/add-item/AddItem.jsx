import { Input, Button } from '@chakra-ui/react'
import { useFormik } from "formik";
import styles from './add_item.module.css'

const AddItem = () => {
    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted
    const formik = useFormik({
        initialValues: {
          item: '',
        },
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2))
        },
    })

    return (
        <form onSubmit={formik.handleSubmit} className={styles.add_block}>
            <Input 
                placeholder='Basic usage' 
                name='item'
                onChange={formik.handleChange} 
                value={formik.values.item} 
            />
            <Button colorScheme='blue'>Add item</Button>
        </form>
    )
}

export default AddItem