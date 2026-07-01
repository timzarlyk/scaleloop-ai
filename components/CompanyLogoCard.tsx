type Logo = {
  name: string;
  src: string;
  className: string;
};

export default function CompanyLogoCard({ logo }: { logo: Logo }) {
  return (
    <div className="group flex h-[112px] items-center justify-center rounded-[24px] border border-slate-200/90 bg-white/90 px-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-[0_24px_70px_rgba(15,23,42,0.10)]">
      <div className="flex h-[56px] w-[180px] items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logo.src}
          alt={logo.name}
          className={`${logo.className} object-contain`}
        />
      </div>
    </div>
  );
}
