type ContainerProps = {
  children: React.ReactNode
}

export const Container = ({ children }: ContainerProps) => (
  <div className="container mx-auto px-4 md:px-12 lg:px-24">{children}</div>
)
export default Container
