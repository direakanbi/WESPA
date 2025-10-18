// global-animation.tsx
'use client';
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import { FeatureCollection, Geometry } from 'geojson';

const COUNTRY_METADATA = [
    { name: "Afghanistan", alpha2: "AF", alpha3: "AFG" },
    { name: "Albania", alpha2: "AL", alpha3: "ALB" },
    { name: "Algeria", alpha2: "DZ", alpha3: "DZA" },
    { name: "American Samoa", alpha2: "AS", alpha3: "ASM" },
    { name: "Andorra", alpha2: "AD", alpha3: "AND" },
    { name: "Angola", alpha2: "AO", alpha3: "AGO" },
    { name: "Anguilla", alpha2: "AI", alpha3: "AIA" },
    { name: "Antigua and Barbuda", alpha2: "AG", alpha3: "ATG" },
    { name: "Argentina", alpha2: "AR", alpha3: "ARG" },
    { name: "Armenia", alpha2: "AM", alpha3: "ARM" },
    { name: "Aruba", alpha2: "AW", alpha3: "ABW" },
    { name: "Australia", alpha2: "AU", alpha3: "AUS" },
    { name: "Austria", alpha2: "AT", alpha3: "AUT" },
    { name: "Azerbaijan", alpha2: "AZ", alpha3: "AZE" },
    { name: "Bahamas", alpha2: "BS", alpha3: "BHS" },
    { name: "Bahrain", alpha2: "BH", alpha3: "BHR" },
    { name: "Bangladesh", alpha2: "BD", alpha3: "BGD" },
    { name: "Barbados", alpha2: "BB", alpha3: "BRB" },
    { name: "Belarus", alpha2: "BY", alpha3: "BLR" },
    { name: "Belgium", alpha2: "BE", alpha3: "BEL" },
    { name: "Belize", alpha2: "BZ", alpha3: "BLZ" },
    { name: "Benin", alpha2: "BJ", alpha3: "BEN" },
    { name: "Bermuda", alpha2: "BM", alpha3: "BMU" },
    { name: "Bhutan", alpha2: "BT", alpha3: "BTN" },
    { name: "Bolivia", alpha2: "BO", alpha3: "BOL" },
    { name: "Bosnia and Herzegovina", alpha2: "BA", alpha3: "BIH" },
    { name: "Botswana", alpha2: "BW", alpha3: "BWA" },
    { name: "Brazil", alpha2: "BR", alpha3: "BRA" },
    { name: "British Virgin Islands", alpha2: "VG", alpha3: "VGB" },
    { name: "Brunei Darussalam", alpha2: "BN", alpha3: "BRN" },
    { name: "Bulgaria", alpha2: "BG", alpha3: "BGR" },
    { name: "Burkina Faso", alpha2: "BF", alpha3: "BFA" },
    { name: "Burundi", alpha2: "BI", alpha3: "BDI" },
    { name: "Cambodia", alpha2: "KH", alpha3: "KHM" },
    { name: "Cameroon", alpha2: "CM", alpha3: "CMR" },
    { name: "Canada", alpha2: "CA", alpha3: "CAN" },
    { name: "Cape Verde", alpha2: "CV", alpha3: "CPV" },
    { name: "Central African Republic", alpha2: "CF", alpha3: "CAF" },
    { name: "Chad", alpha2: "TD", alpha3: "TCD" },
    { name: "Chile", alpha2: "CL", alpha3: "CHL" },
    { name: "China", alpha2: "CN", alpha3: "CHN" },
    { name: "Hong Kong", alpha2: "HK", alpha3: "HKG" },
    { name: "Macao", alpha2: "MO", alpha3: "MAC" },
    { name: "Colombia", alpha2: "CO", alpha3: "COL" },
    { name: "Comoros", alpha2: "KM", alpha3: "COM" },
    { name: "Congo", alpha2: "CG", alpha3: "COG" },
    { name: "Costa Rica", alpha2: "CR", alpha3: "CRI" },
    { name: "Côte d'Ivoire", alpha2: "CI", alpha3: "CIV" },
    { name: "Croatia", alpha2: "HR", alpha3: "HRV" },
    { name: "Cuba", alpha2: "CU", alpha3: "CUB" },
    { name: "Cyprus", alpha2: "CY", alpha3: "CYP" },
    { name: "Czech Republic", alpha2: "CZ", alpha3: "CZE" },
    { name: "Denmark", alpha2: "DK", alpha3: "DNK" },
    { name: "Djibouti", alpha2: "DJ", alpha3: "DJI" },
    { name: "Dominica", alpha2: "DM", alpha3: "DMA" },
    { name: "Dominican Republic", alpha2: "DO", alpha3: "DOM" },
    { name: "Ecuador", alpha2: "EC", alpha3: "ECU" },
    { name: "Egypt", alpha2: "EG", alpha3: "EGY" },
    { name: "El Salvador", alpha2: "SV", alpha3: "SLV" },
    { name: "Equatorial Guinea", alpha2: "GQ", alpha3: "GNQ" },
    { name: "Eritrea", alpha2: "ER", alpha3: "ERI" },
    { name: "Estonia", alpha2: "EE", alpha3: "EST" },
    { name: "Ethiopia", alpha2: "ET", alpha3: "ETH" },
    { name: "Faroe Islands", alpha2: "FO", alpha3: "FRO" },
    { name: "Fiji", alpha2: "FJ", alpha3: "FJI" },
    { name: "Finland", alpha2: "FI", alpha3: "FIN" },
    { name: "France", alpha2: "FR", alpha3: "FRA" },
    { name: "French Guiana", alpha2: "GF", alpha3: "GUF" },
    { name: "French Polynesia", alpha2: "PF", alpha3: "PYF" },
    { name: "Gabon", alpha2: "GA", alpha3: "GAB" },
    { name: "Gambia", alpha2: "GM", alpha3: "GMB" },
    { name: "Georgia", alpha2: "GE", alpha3: "GEO" },
    { name: "Germany", alpha2: "DE", alpha3: "DEU" },
    { name: "Ghana", alpha2: "GH", alpha3: "GHA" },
    { name: "Greece", alpha2: "GR", alpha3: "GRC" },
    { name: "Greenland", alpha2: "GL", alpha3: "GRL" },
    { name: "Grenada", alpha2: "GD", alpha3: "GRD" },
    { name: "Guadeloupe", alpha2: "GP", alpha3: "GLP" },
    { name: "Guam", alpha2: "GU", alpha3: "GUM" },
    { name: "Guatemala", alpha2: "GT", alpha3: "GTM" },
    { name: "Guinea", alpha2: "GN", alpha3: "GIN" },
    { name: "Guinea-Bissau", alpha2: "GW", alpha3: "GNB" },
    { name: "Guyana", alpha2: "GY", alpha3: "GUY" },
    { name: "Haiti", alpha2: "HT", alpha3: "HTI" },
    { name: "Honduras", alpha2: "HN", alpha3: "HND" },
    { name: "Hungary", alpha2: "HU", alpha3: "HUN" },
    { name: "Iceland", alpha2: "IS", alpha3: "ISL" },
    { name: "India", alpha2: "IN", alpha3: "IND" },
    { name: "Indonesia", alpha2: "ID", alpha3: "IDN" },
    { name: "Iran (Islamic Republic of)", alpha2: "IR", alpha3: "IRN" },
    { name: "Iraq", alpha2: "IQ", alpha3: "IRQ" },
    { name: "Ireland", alpha2: "IE", alpha3: "IRL" },
    { name: "Israel", alpha2: "IL", alpha3: "ISR" },
    { name: "Italy", alpha2: "IT", alpha3: "ITA" },
    { name: "Jamaica", alpha2: "JM", alpha3: "JAM" },
    { name: "Japan", alpha2: "JP", alpha3: "JPN" },
    { name: "Jordan", alpha2: "JO", alpha3: "JOR" },
    { name: "Kazakhstan", alpha2: "KZ", alpha3: "KAZ" },
    { name: "Kenya", alpha2: "KE", alpha3: "KEN" },
    { name: "Kiribati", alpha2: "KI", alpha3: "KIR" },
    { name: "Korea (North)", alpha2: "KP", alpha3: "PRK" },
    { name: "Korea (South)", alpha2: "KR", alpha3: "KOR" },
    { name: "Kuwait", alpha2: "KW", alpha3: "KWT" },
    { name: "Kyrgyzstan", alpha2: "KG", alpha3: "KGZ" },
    { name: "Lao PDR", alpha2: "LA", alpha3: "LAO" },
    { name: "Latvia", alpha2: "LV", alpha3: "LVA" },
    { name: "Lebanon", alpha2: "LB", alpha3: "LBN" },
    { name: "Lesotho", alpha2: "LS", alpha3: "LSO" },
    { name: "Liberia", alpha2: "LR", alpha3: "LBR" },
    { name: "Libya", alpha2: "LY", alpha3: "LBY" },
    { name: "Liechtenstein", alpha2: "LI", alpha3: "LIE" },
    { name: "Lithuania", alpha2: "LT", alpha3: "LTU" },
    { name: "Luxembourg", alpha2: "LU", alpha3: "LUX" },
    { name: "Madagascar", alpha2: "MG", alpha3: "MDG" },
    { name: "Malawi", alpha2: "MW", alpha3: "MWI" },
    { name: "Malaysia", alpha2: "MY", alpha3: "MYS" },
    { name: "Maldives", alpha2: "MV", alpha3: "MDV" },
    { name: "Mali", alpha2: "ML", alpha3: "MLI" },
    { name: "Malta", alpha2: "MT", alpha3: "MLT" },
    { name: "Marshall Islands", alpha2: "MH", alpha3: "MHL" },
    { name: "Martinique", alpha2: "MQ", alpha3: "MTQ" },
    { name: "Mauritania", alpha2: "MR", alpha3: "MRT" },
    { name: "Mauritius", alpha2: "MU", alpha3: "MUS" },
    { name: "Mexico", alpha2: "MX", alpha3: "MEX" },
    { name: "Micronesia", alpha2: "FM", alpha3: "FSM" },
    { name: "Moldova", alpha2: "MD", alpha3: "MDA" },
    { name: "Monaco", alpha2: "MC", alpha3: "MCO" },
    { name: "Mongolia", alpha2: "MN", alpha3: "MNG" },
    { name: "Montenegro", alpha2: "ME", alpha3: "MNE" },
    { name: "Montserrat", alpha2: "MS", alpha3: "MSR" },
    { name: "Morocco", alpha2: "MA", alpha3: "MAR" },
    { name: "Mozambique", alpha2: "MZ", alpha3: "MOZ" },
    { name: "Myanmar", alpha2: "MM", alpha3: "MMR" },
    { name: "Namibia", alpha2: "NA", alpha3: "NAM" },
    { name: "Nauru", alpha2: "NR", alpha3: "NRU" },
    { name: "Nepal", alpha2: "NP", alpha3: "NPL" },
    { name: "Netherlands", alpha2: "NL", alpha3: "NLD" },
    { name: "New Caledonia", alpha2: "NC", alpha3: "NCL" },
    { name: "New Zealand", alpha2: "NZ", alpha3: "NZL" },
    { name: "Nicaragua", alpha2: "NI", alpha3: "NIC" },
    { name: "Niger", alpha2: "NE", alpha3: "NER" },
    { name: "Nigeria", alpha2: "NG", alpha3: "NGA" },
    { name: "Northern Mariana Islands", alpha2: "MP", alpha3: "MNP" },
    { name: "Norway", alpha2: "NO", alpha3: "NOR" },
    { name: "Oman", alpha2: "OM", alpha3: "OMN" },
    { name: "Pakistan", alpha2: "PK", alpha3: "PAK" },
    { name: "Palau", alpha2: "PW", alpha3: "PLW" },
    { name: "Palestine", alpha2: "PS", alpha3: "PSE" },
    { name: "Panama", alpha2: "PA", alpha3: "PAN" },
    { name: "Papua New Guinea", alpha2: "PG", alpha3: "PNG" },
    { name: "Paraguay", alpha2: "PY", alpha3: "PRY" },
    { name: "Peru", alpha2: "PE", alpha3: "PER" },
    { name: "Philippines", alpha2: "PH", alpha3: "PHL" },
    { name: "Poland", alpha2: "PL", alpha3: "POL" },
    { name: "Portugal", alpha2: "PT", alpha3: "PRT" },
    { name: "Puerto Rico", alpha2: "PR", alpha3: "PRI" },
    { name: "Qatar", alpha2: "QA", alpha3: "QAT" },
    { name: "Romania", alpha2: "RO", alpha3: "ROU" },
    { name: "Russia", alpha2: "RU", alpha3: "RUS" },
    { name: "Rwanda", alpha2: "RW", alpha3: "RWA" },
    { name: "Saint Kitts and Nevis", alpha2: "KN", alpha3: "KNA" },
    { name: "Saint Lucia", alpha2: "LC", alpha3: "LCA" },
    { name: "Saint Vincent and Grenadines", alpha2: "VC", alpha3: "VCT" },
    { name: "Samoa", alpha2: "WS", alpha3: "WSM" },
    { name: "San Marino", alpha2: "SM", alpha3: "SMR" },
    { name: "Sao Tome and Principe", alpha2: "ST", alpha3: "STP" },
    { name: "Saudi Arabia", alpha2: "SA", alpha3: "SAU" },
    { name: "Senegal", alpha2: "SN", alpha3: "SEN" },
    { name: "Serbia", alpha2: "RS", alpha3: "SRB" },
    { name: "Seychelles", alpha2: "SC", alpha3: "SYC" },
    { name: "Sierra Leone", alpha2: "SL", alpha3: "SLE" },
    { name: "Singapore", alpha2: "SG", alpha3: "SGP" },
    { name: "Slovakia", alpha2: "SK", alpha3: "SVK" },
    { name: "Slovenia", alpha2: "SI", alpha3: "SVN" },
    { name: "Solomon Islands", alpha2: "SB", alpha3: "SLB" },
    { name: "Somalia", alpha2: "SO", alpha3: "SOM" },
    { name: "South Africa", alpha2: "ZA", alpha3: "ZAF" },
    { name: "Spain", alpha2: "ES", alpha3: "ESP" },
    { name: "Sri Lanka", alpha2: "LK", alpha3: "LKA" },
    { name: "Sudan", alpha2: "SD", alpha3: "SDN" },
    { name: "Suriname", alpha2: "SR", alpha3: "SUR" },
    { name: "Sweden", alpha2: "SE", alpha3: "SWE" },
    { name: "Switzerland", alpha2: "CH", alpha3: "CHE" },
    { name: "Syria", alpha2: "SY", alpha3: "SYR" },
    { name: "Taiwan", alpha2: "TW", alpha3: "TWN" },
    { name: "Tajikistan", alpha2: "TJ", alpha3: "TJK" },
    { name: "Tanzania", alpha2: "TZ", alpha3: "TZA" },
    { name: "Thailand", alpha2: "TH", alpha3: "THA" },
    { name: "Timor-Leste", alpha2: "TL", alpha3: "TLS" },
    { name: "Togo", alpha2: "TG", alpha3: "TGO" },
    { name: "Tonga", alpha2: "TO", alpha3: "TON" },
    { name: "Trinidad and Tobago", alpha2: "TT", alpha3: "TTO" },
    { name: "Tunisia", alpha2: "TN", alpha3: "TUN" },
    { name: "Turkey", alpha2: "TR", alpha3: "TUR" },
    { name: "Turkmenistan", alpha2: "TM", alpha3: "TKM" },
    { name: "Tuvalu", alpha2: "TV", alpha3: "TUV" },
    { name: "Uganda", alpha2: "UG", alpha3: "UGA" },
    { name: "Ukraine", alpha2: "UA", alpha3: "UKR" },
    { name: "United Arab Emirates", alpha2: "AE", alpha3: "ARE" },
    { name: "United Kingdom", alpha2: "GB", alpha3: "GBR" },
    { name: "United States", alpha2: "US", alpha3: "USA" },
    { name: "Uruguay", alpha2: "UY", alpha3: "URY" },
    { name: "Uzbekistan", alpha2: "UZ", alpha3: "UZB" },
    { name: "Vanuatu", alpha2: "VU", alpha3: "VUT" },
    { name: "Venezuela", alpha2: "VE", alpha3: "VEN" },
    { name: "Vietnam", alpha2: "VN", alpha3: "VNM" },
    { name: "Virgin Islands (US)", alpha2: "VI", alpha3: "VIR" },
    { name: "Yemen", alpha2: "YE", alpha3: "YEM" },
    { name: "Zambia", alpha2: "ZM", alpha3: "ZMB" },
    { name: "Zimbabwe", alpha2: "ZW", alpha3: "ZWE" }
  ];

const GlobalAnimation: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const animationRef = useRef<number | null>(null);

  // WESPA country alpha3 codes
  const wespa_countries = [
    "AUS", "CAN", "NGA", "PAK", "THA", "GBR", "USA", "BWA", "GMB", "GHA",
    "HKG", "IND", "IDN", "IRL", "KEN", "LBR", "MYS", "MLT", "NZL", "PHL",
    "ROU", "SGP", "SLE", "ZAF", "LKA", "TTO", "UGA", "ZMB", "DEU", "TZA",
    "ARE", "CHE", "BGD", "CMR", "NPL", "NLD", "POL", "QAT", "SYC", "SWE",
    "ESP"
  ];

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    const width = svgRef.current.clientWidth;
    const height = svgRef.current.clientHeight;

    // Clear previous content
    svg.selectAll('*').remove();

    // Set viewBox for responsiveness
    svg.attr('viewBox', `0 0 ${width} ${height}`)
       .attr('preserveAspectRatio', 'xMidYMid meet');

    // Projection
    const projection = d3.geoOrthographic()
      .center([10, 0])
      .scale(Math.min(width, height) / 1.95)
      .translate([width / 2, height / 2])
      .clipAngle(90);

    const path = d3.geoPath().projection(projection);

    // Tooltip
    const tooltip = d3.select('body')
      .append('div')
      .attr('class', 'country-tooltip')
      .style('position', 'absolute')
      .style('padding', '5px 10px')
      .style('background', '#222')
      .style('color', '#fff')
      .style('border-radius', '5px')
      .style('pointer-events', 'none')
      .style('font-size', '14px')
      .style('display', 'none');

    // Glow filter
    const defs = svg.append('defs');
    const glow = defs.append('filter').attr('id', 'glow');
    glow.append('feGaussianBlur')
        .attr('stdDeviation', 20)
        .attr('result', 'blur');

    // Background glow circle
    svg.insert('circle', ':first-child')
      .attr('cx', width / 2)
      .attr('cy', height / 2)
      .attr('r', Math.min(width, height) / 2.2)
      .style('fill', '#c5eaf4')
      .style('opacity', 0.1)
      .style('filter', 'url(#glow)');

    // Rotation config
    const config = { 
      lambda: 0, // longitude rotation
      phi: -10   // latitude tilt
    };

    // Rotation animation
    const rotateGlobe = () => {
        config.lambda += 0.2;
        projection.rotate([-config.lambda, config.phi]);
        svg.selectAll('path.country')
           .attr('d', (d: any) => path(d));
        animationRef.current = requestAnimationFrame(rotateGlobe);
      };

    // Fetch world GeoJSON
    d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
    .then((world: any) => {
      const result: any = topojson.feature(world, world.objects.countries);
      const countries = Array.isArray(result.features) 
        ? result.features 
        : [result];
        // Render countries
        svg.append('g')
        .selectAll('path')
        .data(countries)
        .enter()
        .append('path')
        .attr('class', 'country')
        .attr('d', (d: any) => path(d)) // ✅ Fixed
        .attr('fill', (d: any) => {
            const numId = d.id ? Number(d.id) : null;
            const iso = numId ? idToAlpha3[numId] : null;
            return iso && wespa_countries.includes(iso) ? '#D97858' : '#000';
          })
        .style('stroke', '#fff')
        .style('stroke-width', 0.5)
        .on('mouseover', function(event: MouseEvent, d: any) {
            const numId = d.id ? Number(d.id) : null;
            const iso = numId ? idToAlpha3[numId] : null;
            const name = iso ? alpha3ToName[iso.trim()] || `(${iso})` : 'Unknown';
            tooltip.style('display', 'block').text(name);
          })
        .on('mousemove', function(event: MouseEvent) {
          tooltip
            .style('left', (event.pageX + 10) + 'px')
            .style('top', (event.pageY - 28) + 'px');
        })
        .on('mouseout', () => {
          tooltip.style('display', 'none');
        });

        // Start rotation
        rotateGlobe();
      })
      .catch((err: any) => console.error('Failed to load world data:', err));

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      tooltip.remove();
    };
  }, []);

  return <svg ref={svgRef} style={{ width: '100%', height: '100%' }} />;
};

// === GeoJSON ID → ISO alpha3 mapping (from world-atlas) ===
// Source: https://github.com/topojson/world-atlas#readme
const idToAlpha3: Record<number, string> = {
  10: "ATA", 24: "AGO", 28: "ATG", 31: "AZE", 32: "ARG", 36: "AUS", 40: "AUT",
  44: "BHS", 48: "BHR", 50: "BGD", 51: "ARM", 52: "BRB", 56: "BEL", 60: "BLZ",
  64: "BTN", 68: "BOL", 70: "BIH", 72: "BWA", 76: "BRA", 84: "BLZ", 90: "SLB",
  92: "VGB", 96: "BRN", 100: "BGR", 104: "MMR", 108: "BDI", 112: "BLR", 116: "KHM",
  120: "CMR", 124: "CAN", 132: "CPV", 136: "CYM", 140: "CAF", 144: "LKA", 148: "TCD",
  152: "CHL", 156: "CHN", 158: "TWN", 162: "CXR", 166: "CCK", 170: "COL", 174: "COM",
  175: "MYT", 178: "COG", 180: "COD", 184: "COK", 188: "CRI", 191: "HRV", 192: "CUB",
  196: "CYP", 203: "CZE", 204: "BEN", 208: "DNK", 212: "DMA", 214: "DOM", 218: "ECU",
  222: "SLV", 226: "GNQ", 230: "ETH", 231: "ERI", 232: "EST", 233: "FRO", 234: "FLK",
  238: "SGS", 239: "GEO", 242: "FJI", 246: "FIN", 248: "ALA", 250: "FRA", 254: "GUF",
  258: "PYF", 260: "ATF", 262: "DJI", 266: "GAB", 268: "GEO", 270: "GMB", 275: "PSE",
  276: "DEU", 280: "NAM", 284: "GHA", 288: "GIB", 292: "GRC", 296: "KIR", 300: "GRC",
  304: "GRL", 308: "GRD", 312: "GLP", 316: "GUM", 320: "GTM", 324: "GIN", 328: "GUY",
  332: "HTI", 334: "HMD", 336: "VAT", 340: "HND", 344: "HKG", 348: "HUN", 352: "ISL",
  356: "IND", 360: "IDN", 364: "IRN", 368: "IRQ", 372: "IRL", 376: "ISR", 380: "ITA",
  384: "CIV", 388: "JAM", 392: "JPN", 398: "KAZ", 400: "JOR", 404: "KEN", 408: "PRK",
  410: "KOR", 414: "KWT", 417: "KGZ", 418: "LAO", 422: "LBN", 426: "LSO", 428: "LVA",
  430: "LBR", 434: "LBY", 438: "LIE", 440: "LTU", 442: "LUX", 446: "MAC", 450: "MDG",
  454: "MWI", 458: "MYS", 462: "MDV", 466: "MLI", 470: "MLT", 474: "MTQ", 478: "MRT",
  480: "MUS", 484: "MEX", 492: "MCO", 496: "MNG", 498: "MDA", 499: "MNE", 500: "MSR",
  504: "MAR", 508: "MOZ", 512: "OMN", 516: "NAM", 520: "NRU", 524: "NPL", 528: "NLD",
  530: "CUW", 533: "ABW", 534: "SXM", 535: "BES", 540: "NCL", 548: "VUT", 554: "NZL",
  558: "NIC", 562: "NER", 566: "NGA", 570: "NIU", 574: "NFK", 578: "NOR", 580: "MNP",
  581: "UMI", 583: "FSM", 584: "MHL", 585: "PLW", 586: "PAK", 591: "PAN", 598: "PNG",
  600: "PRY", 604: "PER", 608: "PHL", 612: "PCN", 616: "POL", 620: "PRT", 624: "GNB",
  626: "TLS", 630: "PRI", 634: "QAT", 638: "REU", 642: "ROU", 643: "RUS", 646: "RWA",
  652: "BLM", 654: "SHN", 659: "KNA", 660: "AIA", 662: "LCA", 663: "MAF", 666: "SPM",
  670: "VCT", 674: "SMR", 678: "STP", 682: "SAU", 686: "SEN", 688: "SRB", 690: "SYC",
  694: "SLE", 702: "SGP", 703: "SVK", 704: "VNM", 705: "SVN", 706: "SOM", 710: "ZAF",
  716: "ZWE", 724: "ESP", 728: "SSD", 729: "SDN", 732: "ESH", 740: "SUR", 744: "SJM",
  748: "SWZ", 752: "SWE", 756: "CHE", 760: "SYR", 762: "TJK", 764: "THA", 768: "TGO",
  772: "TKL", 776: "TON", 780: "TTO", 784: "ARE", 788: "TUN", 792: "TUR", 795: "TKM",
  796: "TCA", 798: "TUV", 800: "UGA", 804: "UKR", 807: "MKD", 818: "EGY", 826: "GBR",
  831: "GGY", 832: "JEY", 833: "IMN", 834: "TZA", 840: "USA", 850: "VIR", 854: "BFA",
  858: "URY", 860: "UZB", 862: "VEN", 882: "WSM", 887: "YEM", 894: "ZMB"
};

// Optional: map alpha3 → readable name (from your list)
const alpha3ToName: Record<string, string> = {};
COUNTRY_METADATA.forEach(c => {
    const key = c.alpha3.trim();
    if (key) alpha3ToName[key] = c.name;
  });
// Assuming your `countries` array is available in scope or imported
// For brevity, we’ll skip full population here—but you can import it

export default GlobalAnimation;