'use client';

type THeadingProps = {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const Heading: React.FC<THeadingProps> = ({
  title,
  subtitle,
  center,
}) => {
  return (
    <div className={center ? 'text-center' : 'text-start'}>
      <div className="text-2xl font-bold">
        {title}
      </div>
      <div className="font-light text-neutral-500 mt-2">
        {subtitle}
      </div>
      heading
    </div>
  )
}

export default Heading