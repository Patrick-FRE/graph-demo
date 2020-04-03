export const mockData = {
  nodes: [
    { id: 144642, label: "SAMPLE_SDATA" },
    { id: 144643, label: "SAMPLE_STRUCTURE" },
    { id: 144000, label: "SAMPLE1_CI" },
    { id: 144001, label: "TEST_ROLE" },
    { id: 144641, label: "SAMPLE_STG_RUG" },
    { id: 144134, label: "SAMPLE_VEH" },
    { id: 144135, label: "SAMPLE_STG_COUNTRY" },
    { id: 144644, label: "SAMPLE_REQUIREMENT_TYPE" },
    { id: 144132, label: "SAMPLE_SUITE" },
    { id: 144645, label: "SOME_DT_IDENTIFIER_TYPE" },
    { id: 144133, label: "SAMPLE_PSFS" },
    { id: 143755, label: "A_SYSTEM" },
    { id: 144136, label: "SAMPLE_SERIES_LONG_LONG_NAME" },
    { id: 143756, label: "DURATION" },
    { id: 143757, label: "SAMPLE_PBM" },
    { id: 144277, label: "THE_MKT" },
    { id: 144542, label: "SPN_TY" },
    { id: 144541, label: "SAMPLE1_CLASS_TYPE" },
    { id: 143906, label: "CAPACITY_AVAILABILITY_STATUS" },
    { id: 144291, label: "PIXA" },
    { id: 143907, label: "C_QUALITY" },
    { id: 143905, label: "A_CLASS" },
    { id: 144807, label: "PR_TY" },
    { id: 144295, label: "SOME_PARTIC" },
    { id: 143908, label: "SAMPLE_PFS" },
    { id: 144292, label: "MGM_ST" },
    { id: 144805, label: "T_DESG" },
    { id: 143909, label: "DISTRIBUTION_TYPE" },
    { id: 144293, label: "SAMPLE_STG_BEN" },
    { id: 144810, label: "SDCM_SUPERSHEET" },
    { id: 143786, label: "INAV_CALCULATION_AGENT" },
    { id: 143784, label: "SAMPLE_PDCT_LONG_LONG_NAME" },
    { id: 143785, label: "SAMPLE_PDCT" },
    { id: 144684, label: "ST_EX" },
    { id: 144685, label: "W_REG" },
    { id: 144434, label: "SAMPLE_SDATA_STYLE" },
    { id: 144435, label: "HP_TYPE" },
    { id: 143664, label: "BEN" },
    { id: 143665, label: "BEN_TYPE" },
    { id: 144433, label: "SAMPLE_PDCT_BUS_ID" },
    { id: 144190, label: "RECK_FD_TYPE" },
    { id: 144188, label: "RECK_MNG_COMPANY" },
    { id: 144189, label: "SAMPLE_PDCT_TEST_ROLE" },
    { id: 144192, label: "PLATFORM" },
    { id: 143681, label: "BROAD_SAMPLE_CTG" },
    { id: 143690, label: "BREAKPOINT_TYPE" },
    { id: 143689, label: "CLIENT_TYPE" },
    { id: 143954, label: "SAMPLE_STYLE" },
    { id: 143955, label: "SAMPLE_PDCT_SDCM" },
    { id: 144339, label: "MKT_CZA" },
    { id: 143952, label: "SAMPLE_PR_TY" },
    { id: 143953, label: "INST_TYPE" },
    { id: 143956, label: "SAMPLE_SERIES" },
    { id: 144341, label: "MGM_ST_SUBTYPE" },
    { id: 144474, label: "MM_TYPE" },
    { id: 143706, label: "CLG_M" },
    { id: 153690, label: "SAMPLE_STG_BUS_ID" },
    { id: 144475, label: "SAMPLE1_CLASS_SUBTYPE" },
    { id: 143707, label: "COMP_RG" },
    { id: 143708, label: "COUNTRY" },
    { id: 144476, label: "SAMPLE1_CS_REQ" },
    { id: 144860, label: "BUS_ID_TYPE" },
    { id: 144477, label: "SAMPLE_STG" },
    { id: 144868, label: "INC_DOM" },
    { id: 144876, label: "SAMPLE_VEH_SUBTYPE" },
    { id: 143731, label: "FEE_SCHEDULE_TYPE" },
    { id: 144240, label: "SPONSOR" },
    { id: 144884, label: "VINTAGE" },
    { id: 143732, label: "FIB_GRP" },
    { id: 143733, label: "FUNCTIONAL_ROLE" },
    { id: 143866, label: "CUR" },
    { id: 143867, label: "DEC_TRUS" },
    { id: 143864, label: "BREAKPOINT_RANK" },
    { id: 143865, label: "CAP_LEV" },
    { id: 143998, label: "SAMPLE1_CLASS" },
    { id: 143999, label: "SAMPLE1_CLASS_FEE_SCHEDULE" },
    { id: 143868, label: "DD_CYCLE_TYPE" },
  ],
  edges: [
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2084,
            name: "COUNTRY_ibfk_1",
            from: "W_REG_ID",
            to: "W_REG_ID",
          },
        ],
      },
      label: "COUNTRY-W_REG",
      source: 143708,
      target: 144685,
      id: "143708-144685",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2115,
            name: "SAMPLE_PDCT_SDCM_ibfk_2",
            from: "SDCM_SUPERSHEET_ID",
            to: "SDCM_SUPERSHEET_ID",
          },
        ],
      },
      label: "SAMPLE_PDCT_SDCM-SDCM_SUPERSHEET",
      source: 143955,
      target: 144810,
      id: "143955-144810",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2142,
            name: "SAMPLE_PSFS_ibfk_7",
            from: "SAMPLE_PDCT_ID",
            to: "SAMPLE_PDCT_ID",
          },
        ],
      },
      label: "SAMPLE_PSFS-SAMPLE_PDCT",
      source: 144133,
      target: 143785,
      id: "144133-143785",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2164,
            name: "SAMPLE_STG_ibfk_14",
            from: "SAMPLE_STG_RUG_ID",
            to: "SAMPLE_STG_RUG_ID",
          },
        ],
      },
      label: "SAMPLE_STG-SAMPLE_STG_RUG",
      source: 144477,
      target: 144641,
      id: "144477-144641",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2167,
            name: "SAMPLE_STG_ibfk_6",
            from: "SAMPLE_SDATA_ID",
            to: "SAMPLE_SDATA_ID",
          },
        ],
      },
      label: "SAMPLE_STG-SAMPLE_SDATA",
      source: 144477,
      target: 144642,
      id: "144477-144642",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2143,
            name: "SAMPLE_PSFS_ibfk_10",
            from: "BREAKPOINT_RANK_ID",
            to: "BREAKPOINT_RANK_ID",
          },
        ],
      },
      label: "SAMPLE_PSFS-BREAKPOINT_RANK",
      source: 144133,
      target: 143864,
      id: "144133-143864",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2174,
            name: "SAMPLE_STG_ibfk_10",
            from: "SAMPLE_STRUCTURE_ID",
            to: "SAMPLE_STRUCTURE_ID",
          },
        ],
      },
      label: "SAMPLE_STG-SAMPLE_STRUCTURE",
      source: 144477,
      target: 144643,
      id: "144477-144643",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2092,
            name: "SAMPLE_PDCT_ibfk_5",
            from: "SAMPLE_VEH_ID",
            to: "SAMPLE_VEH_ID",
          },
        ],
      },
      label: "SAMPLE_PDCT-SAMPLE_VEH",
      source: 143785,
      target: 144134,
      id: "143785-144134",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2136,
            name: "SAMPLE_STG_COUNTRY_ibfk_1",
            from: "COUNTRY_ID",
            to: "COUNTRY_ID",
          },
        ],
      },
      label: "SAMPLE_STG_COUNTRY-COUNTRY",
      source: 144135,
      target: 143708,
      id: "144135-143708",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2145,
            name: "SAMPLE_PSFS_ibfk_4",
            from: "PLATFORM_ID",
            to: "PLATFORM_ID",
          },
        ],
      },
      label: "SAMPLE_PSFS-PLATFORM",
      source: 144133,
      target: 144192,
      id: "144133-144192",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2157,
            name: "SAMPLE1_CS_REQ_ibfk_1",
            from: "SAMPLE1_CLASS_ID",
            to: "SAMPLE1_CLASS_ID",
          },
        ],
      },
      label: "SAMPLE1_CS_REQ-SAMPLE1_CLASS",
      source: 144476,
      target: 143998,
      id: "144476-143998",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2107,
            name: "SAMPLE_PFS_ibfk_10",
            from: "FEE_SCHEDULE_TYPE_ID",
            to: "FEE_SCHEDULE_TYPE_ID",
          },
        ],
      },
      label: "SAMPLE_PFS-FEE_SCHEDULE_TYPE",
      source: 143908,
      target: 143731,
      id: "143908-143731",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2138,
            name: "SAMPLE_STG_COUNTRY_ibfk_2",
            from: "SAMPLE_STG_ID",
            to: "SAMPLE_STG_ID",
          },
        ],
      },
      label: "SAMPLE_STG_COUNTRY-SAMPLE_STG",
      source: 144135,
      target: 144477,
      id: "144135-144477",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2159,
            name: "SAMPLE1_CS_REQ_ibfk_3",
            from: "SAMPLE_REQUIREMENT_TYPE_ID",
            to: "SAMPLE_REQUIREMENT_TYPE_ID",
          },
        ],
      },
      label: "SAMPLE1_CS_REQ-SAMPLE_REQUIREMENT_TYPE",
      source: 144476,
      target: 144644,
      id: "144476-144644",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2162,
            name: "SAMPLE_STG_ibfk_12",
            from: "DURATION_ID",
            to: "DURATION_ID",
          },
        ],
      },
      label: "SAMPLE_STG-DURATION",
      source: 144477,
      target: 143756,
      id: "144477-143756",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2165,
            name: "SAMPLE_STG_ibfk_5",
            from: "SAMPLE_STYLE_ID",
            to: "SAMPLE_STYLE_ID",
          },
        ],
      },
      label: "SAMPLE_STG-SAMPLE_STYLE",
      source: 144477,
      target: 143954,
      id: "144477-143954",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2155,
            name: "SAMPLE_PDCT_BUS_ID_ibfk_1",
            from: "SAMPLE_PDCT_ID",
            to: "SAMPLE_PDCT_ID",
          },
        ],
      },
      label: "SAMPLE_PDCT_BUS_ID-SAMPLE_PDCT",
      source: 144433,
      target: 143785,
      id: "144433-143785",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2148,
            name: "SAMPLE_PDCT_TEST_ROLE_ibfk_1",
            from: "SAMPLE_PDCT_ID",
            to: "SAMPLE_PDCT_ID",
          },
        ],
      },
      label: "SAMPLE_PDCT_TEST_ROLE-SAMPLE_PDCT",
      source: 144189,
      target: 143785,
      id: "144189-143785",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2166,
            name: "SAMPLE_STG_ibfk_15",
            from: "THE_MKT_ID",
            to: "THE_MKT_ID",
          },
        ],
      },
      label: "SAMPLE_STG-THE_MKT",
      source: 144477,
      target: 144277,
      id: "144477-144277",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2173,
            name: "SAMPLE_STG_ibfk_7",
            from: "SAMPLE_SDATA_STYLE_ID",
            to: "SAMPLE_SDATA_STYLE_ID",
          },
        ],
      },
      label: "SAMPLE_STG-SAMPLE_SDATA_STYLE",
      source: 144477,
      target: 144434,
      id: "144477-144434",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2109,
            name: "SAMPLE_PFS_ibfk_2",
            from: "BREAKPOINT_TYPE_ID",
            to: "BREAKPOINT_TYPE_ID",
          },
        ],
      },
      label: "SAMPLE_PFS-BREAKPOINT_TYPE",
      source: 143908,
      target: 143690,
      id: "143908-143690",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2141,
            name: "SAMPLE_SERIES_LONG_LONG_NAME_ibfk_1",
            from: "SAMPLE_SERIES_ID",
            to: "SAMPLE_SERIES_ID",
          },
        ],
      },
      label: "SAMPLE_SERIES_LONG_LONG_NAME-SAMPLE_SERIES",
      source: 144136,
      target: 143956,
      id: "144136-143956",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2093,
            name: "SAMPLE_PDCT_ibfk_11",
            from: "VINTAGE_ID",
            to: "VINTAGE_ID",
          },
        ],
      },
      label: "SAMPLE_PDCT-VINTAGE",
      source: 143785,
      target: 144884,
      id: "143785-144884",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2163,
            name: "SAMPLE_STG_ibfk_8",
            from: "COMP_RG_ID",
            to: "COMP_RG_ID",
          },
        ],
      },
      label: "SAMPLE_STG-COMP_RG",
      source: 144477,
      target: 143707,
      id: "144477-143707",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2172,
            name: "SAMPLE_STG_ibfk_4",
            from: "A_CLASS_ID",
            to: "A_CLASS_ID",
          },
        ],
      },
      label: "SAMPLE_STG-A_CLASS",
      source: 144477,
      target: 143905,
      id: "144477-143905",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2089,
            name: "SAMPLE_PDCT_LONG_LONG_NAME_ibfk_2",
            from: "FUNCTIONAL_ROLE_ID",
            to: "FUNCTIONAL_ROLE_ID",
          },
        ],
      },
      label: "SAMPLE_PDCT_LONG_LONG_NAME-FUNCTIONAL_ROLE",
      source: 143784,
      target: 143733,
      id: "143784-143733",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2104,
            name: "SAMPLE_PDCT_ibfk_17",
            from: "SAMPLE_SERIES_ID",
            to: "SAMPLE_SERIES_ID",
          },
        ],
      },
      label: "SAMPLE_PDCT-SAMPLE_SERIES",
      source: 143785,
      target: 143956,
      id: "143785-143956",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2105,
            name: "SAMPLE_PDCT_ibfk_3",
            from: "A_SYSTEM_ID",
            to: "A_SYSTEM_ID",
          },
        ],
      },
      label: "SAMPLE_PDCT-A_SYSTEM",
      source: 143785,
      target: 143755,
      id: "143785-143755",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2122,
            name: "SAMPLE1_CLASS_FEE_SCHEDULE_ibfk_1",
            from: "SAMPLE1_CLASS_ID",
            to: "SAMPLE1_CLASS_ID",
          },
        ],
      },
      label: "SAMPLE1_CLASS_FEE_SCHEDULE-SAMPLE1_CLASS",
      source: 143999,
      target: 143998,
      id: "143999-143998",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2150,
            name: "SPN_1",
            from: "SPN_TY_ID",
            to: "SPN_TY_ID",
          },
        ],
      },
      label: "SPONSOR-SPN_TY",
      source: 144240,
      target: 144542,
      id: "144240-144542",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2161,
            name: "SAMPLE_STG_ibfk_11",
            from: "C_QUALITY_ID",
            to: "C_QUALITY_ID",
          },
        ],
      },
      label: "SAMPLE_STG-C_QUALITY",
      source: 144477,
      target: 143907,
      id: "144477-143907",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2160,
            name: "SAMPLE1_CS_REQ_ibfk_2",
            from: "CLIENT_TYPE_ID",
            to: "CLIENT_TYPE_ID",
          },
        ],
      },
      label: "SAMPLE1_CS_REQ-CLIENT_TYPE",
      source: 144476,
      target: 143689,
      id: "144476-143689",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2096,
            name: "SAMPLE_PDCT_ibfk_12",
            from: "T_DESG_ID",
            to: "T_DESG_ID",
          },
        ],
      },
      label: "SAMPLE_PDCT-T_DESG",
      source: 143785,
      target: 144805,
      id: "143785-144805",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2135,
            name: "SAMPLE1_CLASS_ibfk_3",
            from: "SAMPLE1_CLASS_TYPE_ID",
            to: "SAMPLE1_CLASS_TYPE_ID",
          },
        ],
      },
      label: "SAMPLE1_CLASS-SAMPLE1_CLASS_TYPE",
      source: 143998,
      target: 144541,
      id: "143998-144541",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2225,
            name: "SAMPLE_STG_BUS_ID_ibfk_1",
            from: "SAMPLE_STG_ID",
            to: "SAMPLE_STG_ID",
          },
        ],
      },
      label: "SAMPLE_STG_BUS_ID-SAMPLE_STG",
      source: 153690,
      target: 144477,
      id: "153690-144477",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2085,
            name: "SAMPLE_PBM_ibfk_4",
            from: "BEN_TYPE_ID",
            to: "BEN_TYPE_ID",
          },
        ],
      },
      label: "SAMPLE_PBM-BEN_TYPE",
      source: 143757,
      target: 143665,
      id: "143757-143665",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2086,
            name: "SAMPLE_PBM_ibfk_2",
            from: "BEN_ID",
            to: "BEN_ID",
          },
        ],
      },
      label: "SAMPLE_PBM-BEN",
      source: 143757,
      target: 143664,
      id: "143757-143664",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2087,
            name: "SAMPLE_PBM_ibfk_3",
            from: "SAMPLE_PDCT_ID",
            to: "SAMPLE_PDCT_ID",
          },
        ],
      },
      label: "SAMPLE_PBM-SAMPLE_PDCT",
      source: 143757,
      target: 143785,
      id: "143757-143785",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2144,
            name: "SAMPLE_PSFS_ibfk_6",
            from: "BREAKPOINT_TYPE_ID",
            to: "BREAKPOINT_TYPE_ID",
          },
        ],
      },
      label: "SAMPLE_PSFS-BREAKPOINT_TYPE",
      source: 144133,
      target: 143690,
      id: "144133-143690",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2175,
            name: "SAMPLE_STG_ibfk_2",
            from: "MGM_ST_SUBTYPE_ID",
            to: "MGM_ST_SUBTYPE_ID",
          },
        ],
      },
      label: "SAMPLE_STG-MGM_ST_SUBTYPE",
      source: 144477,
      target: 144341,
      id: "144477-144341",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2098,
            name: "SAMPLE_PDCT_ibfk_9",
            from: "RECK_FD_TYPE_ID",
            to: "RECK_FD_TYPE_ID",
          },
        ],
      },
      label: "SAMPLE_PDCT-RECK_FD_TYPE",
      source: 143785,
      target: 144190,
      id: "143785-144190",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2131,
            name: "SAMPLE1_CLASS_ibfk_6",
            from: "CAPACITY_AVAILABILITY_STATUS_ID",
            to: "CAPACITY_AVAILABILITY_STATUS_ID",
          },
        ],
      },
      label: "SAMPLE1_CLASS-CAPACITY_AVAILABILITY_STATUS",
      source: 143998,
      target: 143906,
      id: "143998-143906",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2097,
            name: "SAMPLE_PDCT_ibfk_15",
            from: "MM_TYPE_ID",
            to: "MM_TYPE_ID",
          },
        ],
      },
      label: "SAMPLE_PDCT-MM_TYPE",
      source: 143785,
      target: 144474,
      id: "143785-144474",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2127,
            name: "SAMPLE1_CLASS_ibfk_5",
            from: "DISTRIBUTION_TYPE_ID",
            to: "DISTRIBUTION_TYPE_ID",
          },
        ],
      },
      label: "SAMPLE1_CLASS-DISTRIBUTION_TYPE",
      source: 143998,
      target: 143909,
      id: "143998-143909",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2154,
            name: "SAMPLE_STG_BEN_ibfk_3",
            from: "SAMPLE_STG_ID",
            to: "SAMPLE_STG_ID",
          },
        ],
      },
      label: "SAMPLE_STG_BEN-SAMPLE_STG",
      source: 144293,
      target: 144477,
      id: "144293-144477",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2179,
            name: "SAMPLE_PDCT_ibfk_6",
            from: "SAMPLE_VEH_SUBTYPE_ID",
            to: "SAMPLE_VEH_SUBTYPE_ID",
          },
        ],
      },
      label: "SAMPLE_PDCT-SAMPLE_VEH_SUBTYPE",
      source: 143785,
      target: 144876,
      id: "143785-144876",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2088,
            name: "SAMPLE_PDCT_LONG_LONG_NAME_ibfk_3",
            from: "SAMPLE_PDCT_ID",
            to: "SAMPLE_PDCT_ID",
          },
        ],
      },
      label: "SAMPLE_PDCT_LONG_LONG_NAME-SAMPLE_PDCT",
      source: 143784,
      target: 143785,
      id: "143784-143785",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2102,
            name: "SAMPLE_PDCT_ibfk_1",
            from: "SAMPLE_STG_ID",
            to: "SAMPLE_STG_ID",
          },
        ],
      },
      label: "SAMPLE_PDCT-SAMPLE_STG",
      source: 143785,
      target: 144477,
      id: "143785-144477",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2153,
            name: "SAMPLE_STG_BEN_ibfk_4",
            from: "BEN_TYPE_ID",
            to: "BEN_TYPE_ID",
          },
        ],
      },
      label: "SAMPLE_STG_BEN-BEN_TYPE",
      source: 144293,
      target: 143665,
      id: "144293-143665",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2113,
            name: "SAMPLE_PDCT_SDCM_ibfk_1",
            from: "SAMPLE_PDCT_ID",
            to: "SAMPLE_PDCT_ID",
          },
        ],
      },
      label: "SAMPLE_PDCT_SDCM-SAMPLE_PDCT",
      source: 143955,
      target: 143785,
      id: "143955-143785",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2114,
            name: "IVM_PRD_TYP_1",
            from: "SAMPLE_PDCT_ID",
            to: "SAMPLE_PDCT_ID",
          },
        ],
      },
      label: "SAMPLE_PR_TY-SAMPLE_PDCT",
      source: 143952,
      target: 143785,
      id: "143952-143785",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2151,
            name: "PIXA_ibfk_1",
            from: "SAMPLE_PDCT_ID",
            to: "SAMPLE_PDCT_ID",
          },
        ],
      },
      label: "PIXA-SAMPLE_PDCT",
      source: 144291,
      target: 143785,
      id: "144291-143785",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2152,
            name: "SAMPLE_STG_BEN_ibfk_2",
            from: "BEN_ID",
            to: "BEN_ID",
          },
        ],
      },
      label: "SAMPLE_STG_BEN-BEN",
      source: 144293,
      target: 143664,
      id: "144293-143664",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2095,
            name: "SAMPLE_PDCT_ibfk_4",
            from: "DEC_TRUS_ID",
            to: "DEC_TRUS_ID",
          },
        ],
      },
      label: "SAMPLE_PDCT-DEC_TRUS",
      source: 143785,
      target: 143867,
      id: "143785-143867",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2128,
            name: "SAMPLE1_CLASS_ibfk_7",
            from: "CAP_LEV_ID",
            to: "CAP_LEV_ID",
          },
        ],
      },
      label: "SAMPLE1_CLASS-CAP_LEV",
      source: 143998,
      target: 143865,
      id: "143998-143865",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2125,
            name: "SAMPLE1_CLASS_ibfk_2",
            from: "CUR_ID",
            to: "CUR_ID",
          },
        ],
      },
      label: "SAMPLE1_CLASS-CUR",
      source: 143998,
      target: 143866,
      id: "143998-143866",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2094,
            name: "SAMPLE_PDCT_ibfk_8",
            from: "CAP_LEV_ID",
            to: "CAP_LEV_ID",
          },
        ],
      },
      label: "SAMPLE_PDCT-CAP_LEV",
      source: 143785,
      target: 143865,
      id: "143785-143865",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2099,
            name: "SAMPLE_PDCT_ibfk_2",
            from: "CUR_ID",
            to: "CUR_ID",
          },
        ],
      },
      label: "SAMPLE_PDCT-CUR",
      source: 143785,
      target: 143866,
      id: "143785-143866",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2134,
            name: "SAMPLE1_CLASS_ibfk_14",
            from: "DD_CYCLE_TYPE_ID",
            to: "DD_CYCLE_TYPE_ID",
          },
        ],
      },
      label: "SAMPLE1_CLASS-DD_CYCLE_TYPE",
      source: 143998,
      target: 143868,
      id: "143998-143868",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2121,
            name: "SAMPLE1_CLASS_FEE_SCHEDULE_ibfk_3",
            from: "BREAKPOINT_RANK_ID",
            to: "BREAKPOINT_RANK_ID",
          },
        ],
      },
      label: "SAMPLE1_CLASS_FEE_SCHEDULE-BREAKPOINT_RANK",
      source: 143999,
      target: 143864,
      id: "143999-143864",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2124,
            name: "SAMPLE1_CLASS_ibfk_1",
            from: "SAMPLE_PDCT_ID",
            to: "SAMPLE_PDCT_ID",
          },
        ],
      },
      label: "SAMPLE1_CLASS-SAMPLE_PDCT",
      source: 143998,
      target: 143785,
      id: "143998-143785",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2130,
            name: "SAMPLE1_CLASS_ibfk_13",
            from: "INAV_CALCULATION_AGENT_ID",
            to: "INAV_CALCULATION_AGENT_ID",
          },
        ],
      },
      label: "SAMPLE1_CLASS-INAV_CALCULATION_AGENT",
      source: 143998,
      target: 143786,
      id: "143998-143786",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2100,
            name: "SAMPLE_PDCT_ibfk_16",
            from: "CLG_M_ID",
            to: "CLG_M_ID",
          },
        ],
      },
      label: "SAMPLE_PDCT-CLG_M",
      source: 143785,
      target: 143706,
      id: "143785-143706",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2133,
            name: "SAMPLE1_CLASS_ibfk_8",
            from: "HP_TYPE_ID",
            to: "HP_TYPE_ID",
          },
        ],
      },
      label: "SAMPLE1_CLASS-HP_TYPE",
      source: 143998,
      target: 144435,
      id: "143998-144435",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2171,
            name: "SAMPLE_STG_ibfk_13",
            from: "FIB_GRP_ID",
            to: "FIB_GRP_ID",
          },
        ],
      },
      label: "SAMPLE_STG-FIB_GRP",
      source: 144477,
      target: 143732,
      id: "144477-143732",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2224,
            name: "SAMPLE_STG_BUS_ID_ibfk_2",
            from: "BUS_ID_TYPE_ID",
            to: "BUS_ID_TYPE_ID",
          },
        ],
      },
      label: "SAMPLE_STG_BUS_ID-BUS_ID_TYPE",
      source: 153690,
      target: 144860,
      id: "153690-144860",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2101,
            name: "SAMPLE_PDCT_ibfk_7",
            from: "CAPACITY_AVAILABILITY_STATUS_ID",
            to: "CAPACITY_AVAILABILITY_STATUS_ID",
          },
        ],
      },
      label: "SAMPLE_PDCT-CAPACITY_AVAILABILITY_STATUS",
      source: 143785,
      target: 143906,
      id: "143785-143906",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2126,
            name: "SAMPLE1_CLASS_ibfk_4",
            from: "SAMPLE1_CLASS_SUBTYPE_ID",
            to: "SAMPLE1_CLASS_SUBTYPE_ID",
          },
        ],
      },
      label: "SAMPLE1_CLASS-SAMPLE1_CLASS_SUBTYPE",
      source: 143998,
      target: 144475,
      id: "143998-144475",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2147,
            name: "SAMPLE_PDCT_TEST_ROLE_ibfk_3",
            from: "TEST_ROLE_ID",
            to: "TEST_ROLE_ID",
          },
        ],
      },
      label: "SAMPLE_PDCT_TEST_ROLE-TEST_ROLE",
      source: 144189,
      target: 144001,
      id: "144189-144001",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2168,
            name: "SAMPLE_STG_ibfk_1",
            from: "SAMPLE_SUITE_ID",
            to: "SAMPLE_SUITE_ID",
          },
        ],
      },
      label: "SAMPLE_STG-SAMPLE_SUITE",
      source: 144477,
      target: 144132,
      id: "144477-144132",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2170,
            name: "SAMPLE_STG_ibfk_16",
            from: "BROAD_SAMPLE_CTG_ID",
            to: "BROAD_SAMPLE_CTG_ID",
          },
        ],
      },
      label: "SAMPLE_STG-BROAD_SAMPLE_CTG",
      source: 144477,
      target: 143681,
      id: "144477-143681",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2178,
            name: "SAMPLE_VEH_ibfk_1",
            from: "INC_DOM_ID",
            to: "INC_DOM_ID",
          },
        ],
      },
      label: "SAMPLE_VEH-INC_DOM",
      source: 144134,
      target: 144868,
      id: "144134-144868",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2139,
            name: "SAMPLE_SERIES_LONG_LONG_NAME_ibfk_2",
            from: "FUNCTIONAL_ROLE_ID",
            to: "FUNCTIONAL_ROLE_ID",
          },
        ],
      },
      label: "SAMPLE_SERIES_LONG_LONG_NAME-FUNCTIONAL_ROLE",
      source: 144136,
      target: 143733,
      id: "144136-143733",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2106,
            name: "SAMPLE_PDCT_ibfk_10",
            from: "RECK_MNG_COMPANY_ID",
            to: "RECK_MNG_COMPANY_ID",
          },
        ],
      },
      label: "SAMPLE_PDCT-RECK_MNG_COMPANY",
      source: 143785,
      target: 144188,
      id: "143785-144188",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2169,
            name: "SAMPLE_STG_ibfk_3",
            from: "MGM_ST_ID",
            to: "MGM_ST_ID",
          },
        ],
      },
      label: "SAMPLE_STG-MGM_ST",
      source: 144477,
      target: 144292,
      id: "144477-144292",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2119,
            name: "SAMPLE1_CI_ibfk_1",
            from: "SAMPLE1_CLASS_ID",
            to: "SAMPLE1_CLASS_ID",
          },
        ],
      },
      label: "SAMPLE1_CI-SAMPLE1_CLASS",
      source: 144000,
      target: 143998,
      id: "144000-143998",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2120,
            name: "SAMPLE1_CI_ibfk_2",
            from: "INST_TYPE_ID",
            to: "INST_TYPE_ID",
          },
        ],
      },
      label: "SAMPLE1_CI-INST_TYPE",
      source: 144000,
      target: 143953,
      id: "144000-143953",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2140,
            name: "SAMPLE_PSFS_ibfk_8",
            from: "PR_TY_ID",
            to: "PR_TY_ID",
          },
        ],
      },
      label: "SAMPLE_PSFS-PR_TY",
      source: 144133,
      target: 144807,
      id: "144133-144807",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2110,
            name: "SAMPLE_PFS_ibfk_5",
            from: "CUR_ID",
            to: "CUR_ID",
          },
        ],
      },
      label: "SAMPLE_PFS-CUR",
      source: 143908,
      target: 143866,
      id: "143908-143866",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2117,
            name: "IVM_PRD_TYP_2",
            from: "PR_TY_ID",
            to: "PR_TY_ID",
          },
        ],
      },
      label: "SAMPLE_PR_TY-PR_TY",
      source: 143952,
      target: 144807,
      id: "143952-144807",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2108,
            name: "SAMPLE_PFS_ibfk_8",
            from: "SAMPLE_PDCT_ID",
            to: "SAMPLE_PDCT_ID",
          },
        ],
      },
      label: "SAMPLE_PFS-SAMPLE_PDCT",
      source: 143908,
      target: 143785,
      id: "143908-143785",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2158,
            name: "SAMPLE1_CS_REQ_ibfk_4",
            from: "CUR_ID",
            to: "CUR_ID",
          },
        ],
      },
      label: "SAMPLE1_CS_REQ-CUR",
      source: 144476,
      target: 143866,
      id: "144476-143866",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2111,
            name: "SAMPLE_PFS_ibfk_9",
            from: "BREAKPOINT_RANK_ID",
            to: "BREAKPOINT_RANK_ID",
          },
        ],
      },
      label: "SAMPLE_PFS-BREAKPOINT_RANK",
      source: 143908,
      target: 143864,
      id: "143908-143864",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2129,
            name: "SAMPLE1_CLASS_ibfk_9",
            from: "SOME_DT_IDENTIFIER_TYPE_ID",
            to: "SOME_DT_IDENTIFIER_TYPE_ID",
          },
        ],
      },
      label: "SAMPLE1_CLASS-SOME_DT_IDENTIFIER_TYPE",
      source: 143998,
      target: 144645,
      id: "143998-144645",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2177,
            name: "SAMPLE_PDCT_BUS_ID_ibfk_2",
            from: "BUS_ID_TYPE_ID",
            to: "BUS_ID_TYPE_ID",
          },
        ],
      },
      label: "SAMPLE_PDCT_BUS_ID-BUS_ID_TYPE",
      source: 144433,
      target: 144860,
      id: "144433-144860",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2149,
            name: "SAMPLE_PDCT_TEST_ROLE_ibfk_2",
            from: "TEST_ID",
            to: "TEST_ID",
          },
        ],
      },
      label: "SAMPLE_PDCT_TEST_ROLE-SOME_PARTIC",
      source: 144189,
      target: 144295,
      id: "144189-144295",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2176,
            name: "SAMPLE_STG_ibfk_9",
            from: "MKT_CZA_ID",
            to: "MKT_CZA_ID",
          },
        ],
      },
      label: "SAMPLE_STG-MKT_CZA",
      source: 144477,
      target: 144339,
      id: "144477-144339",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2132,
            name: "SAMPLE1_CLASS_ibfk_10",
            from: "ST_EX_ID",
            to: "ST_EX_ID",
          },
        ],
      },
      label: "SAMPLE1_CLASS-ST_EX",
      source: 143998,
      target: 144684,
      id: "143998-144684",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2123,
            name: "SAMPLE1_CLASS_FEE_SCHEDULE_ibfk_2",
            from: "BREAKPOINT_TYPE_ID",
            to: "BREAKPOINT_TYPE_ID",
          },
        ],
      },
      label: "SAMPLE1_CLASS_FEE_SCHEDULE-BREAKPOINT_TYPE",
      source: 143999,
      target: 143690,
      id: "143999-143690",
    },
    {
      data: {
        foreignKeyRefs: [
          {
            id: 2146,
            name: "SAMPLE_PSFS_ibfk_9",
            from: "SPONSOR_ID",
            to: "SPONSOR_ID",
          },
        ],
      },
      label: "SAMPLE_PSFS-SPONSOR",
      source: 144133,
      target: 144240,
      id: "144133-144240",
    },
  ],
};
