type InputProps = {
  onChange(value: string): void // eslint-disable-line
  placeholder?: string
}

const Input = ({ onChange, placeholder }: InputProps): JSX.Element => {
  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      const target = e?.currentTarget
      const value = target?.value

      if (value) {
        onChange(value)
        target.value = ''
      }
    }
  }

  return <input placeholder={placeholder} type="text" onKeyDown={handleKeyDown} />
}

export default Input
