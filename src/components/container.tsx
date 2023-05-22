type ContainerProps = {
  children: React.ReactNode
}

export const Container = ({ children }: ContainerProps) => (
  <div className="container mx-auto">{children}</div>
)
export default Container
