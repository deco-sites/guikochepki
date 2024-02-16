export interface Props {
  /**
   * @format textarea
   */
  scriptOrganization?: string;
  /**
   * @format textarea
   */
  scriptWebsite?: string;
}

export default function HeroFlats({
  scriptOrganization,
  scriptWebsite,
}: Props) {

  return (
    <div>
      {scriptOrganization && 
        <div>
          <div
            className={scriptOrganization}
            dangerouslySetInnerHTML={{ __html: `<script type="application/ld+json">${scriptOrganization}</script>` }}
          />
          <div
            className={scriptOrganization}
            dangerouslySetInnerHTML={{ __html: scriptOrganization }}
          />
        </div>
      }
      {scriptWebsite && 
        <div>
          <div
            className={scriptWebsite}
            dangerouslySetInnerHTML={{ __html: JSON.stringify(scriptWebsite) }}
          />
          <script
            type="application/ld+json"
            className={scriptWebsite}
            dangerouslySetInnerHTML={{ __html: JSON.stringify(scriptWebsite) }}
          />
          <div
            className={scriptWebsite}
            dangerouslySetInnerHTML={{ __html: JSON.stringify(scriptWebsite) }}
          />
          <div
            className={scriptWebsite}
            dangerouslySetInnerHTML={{ __html: `{${JSON.stringify(scriptWebsite)}}` }}
          />
          <div
            className={scriptWebsite}
            dangerouslySetInnerHTML={{ __html: `<script type="application/ld+json">${JSON.stringify(scriptWebsite)}</script>` }}
          />
        </div>
      }
    </div>
  );
}
