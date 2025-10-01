import CustomPrimaryButton from "@/components/buttons/CustomSmallButton"

type NoItemProps = {
  text: string,
  addItemText?: string,
  addItemOnPressedHandler?: () => void
}

const NoItem = ({
  text,
  addItemText,
  addItemOnPressedHandler,
}: NoItemProps) => {
  return (
    <section
      className="py-8 px-4 rounded my-4"
    >
      <p className="text-center text-sm sm:text-lg text-gray-800">
        {text}
      </p>
      {
        (addItemText && addItemOnPressedHandler) && (
          <section className="text-center mt-4">
            <CustomPrimaryButton
              onPressed={addItemOnPressedHandler}
              text={addItemText}
            />
          </section>
        )
      }
    </section>
  )
}

export default NoItem