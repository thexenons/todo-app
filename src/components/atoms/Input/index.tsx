type InputProps = {
  type: string
  onChange(value: string): void // eslint-disable-line
  value: number | string,
  placeholder?: string
}

const Input = ({ type, onChange, value, placeholder }: InputProps): JSX.Element => {
  const handleOnChange = (e: any) => {
    const value = e?.currentTarget?.value

    onChange(value)
  }
  return <input placeholder={placeholder} type={type} onChange={handleOnChange} value={value} />
}

export default Input
