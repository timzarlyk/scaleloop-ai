import KpHeader from "./_components/KpHeader";
import KpMeetingForm from "./_components/KpMeetingForm";
import {
  KpApproach,
  KpContext,
  KpDeliverables,
  KpFooter,
  KpGovernmentSupport,
  KpHero,
  KpKpi,
  KpDiagnosticAreas,
  KpPilots,
  KpPrinciple,
  KpRole,
} from "./_components/KpSections";

export default function ShinLineProposalPage() {
  return (
    <div className="min-h-screen">
      <KpHeader />
      <KpHero />
      <KpContext />
      <KpPrinciple />
      <KpDiagnosticAreas />
      <KpApproach />
      <KpPilots />
      <KpDeliverables />
      <KpKpi />
      <KpGovernmentSupport />
      <KpRole />
      <KpMeetingForm />
      <KpFooter />
    </div>
  );
}
