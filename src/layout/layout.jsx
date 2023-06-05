// alignment 設定 flex itme 的對齊方式
export default function Layout({ children, className }) {
  return (
    <div className='container'>
      <div className={`row ${className}`}>{children}</div>
    </div>
  )
}
