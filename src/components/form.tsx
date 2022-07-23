import {
    Button,
    FormControl,
    Input,
    Stack
} from '@chakra-ui/react'

const Form= () => {
    return (
        <form>
            <Stack spacing={4}>
                <FormControl isRequired>
                    <Input placeholder={"First name"} />
                    <Input placeholder={"Last name"} />
                    <Input placeholder={"Course"} />
                    <Button type={"submit"}>Submit</Button>
                </FormControl>
            </Stack>
        </form>
    )
}

export default Form
