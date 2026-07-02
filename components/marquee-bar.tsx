export function MarqueeBar() {
  return (
    <div className="marquee-bar" aria-hidden="true">
      <div className="marquee-track">
        <span>Microsoft 365</span><span>Azure Cloud</span><span>Vercel Hosting</span>
        <span>Google Business Profile</span><span>AI Voice Agents</span><span>Lead Automation</span>
        <span>AI Document Intelligence</span><span>Zero Downtime Deployments</span>
        <span>Flat Monthly Pricing</span><span>Managed Security</span><span>Workflow Automation</span>
        <span>n8n &amp; Make</span><span>SEO Optimization</span><span>Reputation Automation</span>
        {/* duplicate for loop */}
        <span>Microsoft 365</span><span>Azure Cloud</span><span>Vercel Hosting</span>
        <span>Google Business Profile</span><span>AI Voice Agents</span><span>Lead Automation</span>
        <span>AI Document Intelligence</span><span>Zero Downtime Deployments</span>
        <span>Flat Monthly Pricing</span><span>Managed Security</span><span>Workflow Automation</span>
        <span>n8n &amp; Make</span><span>SEO Optimization</span><span>Reputation Automation</span>
      </div>
    </div>
  );
}
