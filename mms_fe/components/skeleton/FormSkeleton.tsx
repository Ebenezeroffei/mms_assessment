import FormWrapper from '@/components/misc/FormWrapper'
import TextFieldSkeleton from './TextFieldSkeleton'
import CustomButtonSkeleton from './CustomButtonSkeleton'

const FormSkeleton = () => {
    return (
        <section>
            <FormWrapper>
                <TextFieldSkeleton />
                <TextFieldSkeleton />
                <TextFieldSkeleton />
                <TextFieldSkeleton />
            </FormWrapper>
            <CustomButtonSkeleton />
        </section>
    )
}

export default FormSkeleton