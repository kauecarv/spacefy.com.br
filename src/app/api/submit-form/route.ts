import { NextResponse } from 'next/server'

const WEBHOOK_URL = "https://discord.com/api/webhooks/1320509296424783954/0Hwrd7jLHfsYU-GmNJtS795rGpUxB7xLNo8E_dbny1y35drqw500BG6-kfqm_XeOxTj3"

export async function POST(request: Request) {
  try {
    const formData = await request.json()
    const formType = formData.from || 'site'

    const commonFields = [
      {
        name: "👤 Informações do Cliente",
        value: [
          `**Nome:** ${formData.nome}`,
          `**Telefone:** ${formData.telefone}`,
          `**Email:** ${formData.email}`
        ].join('\n'),
        inline: false
      }
    ]

    let specificFields: Array<{
      name: string;
      value: string;
      inline: boolean;
    }> = []
    let title = ""
    let footerText = ""

    switch (formType) {
      case 'sistemas':
        title = "🚀 [SISTEMA] Nova solicitação de desenvolvimento"
        footerText = "Spacefy - Formulário de Sistemas"
        specificFields = [
          {
            name: "📝 Necessidades e Objetivos",
            value: [
              `**Necessidades:** ${formData.necessidades || "Não informado"}`,
              `**Objetivo:** ${formData.objetivo || "Não informado"}`,
              `**Tecnologia:** ${formData.tecnologia || "Não informado"}`
            ].join('\n'),
            inline: false
          },
          {
            name: "⚙️ Requisitos Técnicos",
            value: [
              `**Banco de Dados:** ${formData.bancoDados || "Não informado"}`,
              `**Integrações:** ${formData.integracao || "Não informado"}`,
              `**Usuários:** ${formData.usuarios || "Não informado"}`
            ].join('\n'),
            inline: false
          }
        ]
        break

      case 'sites':
        title = "🌐 [SITE] Nova solicitação de website"
        footerText = "Spacefy - Formulário de Sites"
        specificFields = [
          {
            name: "📝 Detalhes do Site",
            value: [
              `**Páginas:** ${formData.paginas || "Não informado"}`,
              `**Seções:** ${formData.secoes || "Não informado"}`,
              `**Infraestrutura:** ${formData.infraestrutura === 'sim' ? 'Possui' : 'Não possui'}`
            ].join('\n'),
            inline: false
          }
        ]
        break

      case 'modelos':
        title = "🎨 [MODELO] Nova solicitação de template"
        footerText = "Spacefy - Formulário de Modelos"
        specificFields = [
          {
            name: "📝 Detalhes do Modelo",
            value: [
              `**Descrição:** ${formData.descricao || "Não informado"}`,
              `**Páginas:** ${formData.paginas || "Não informado"}`,
              `**Seções:** ${formData.secoes || "Não informado"}`,
              `**Referência:** ${formData.referencia === 'sim' ? 'Sim' : 'Não'}`,
              `**Link de Referência:** ${formData.referenciaLink || "Não informado"}`,
              `**Conteúdo:** ${formData.conteudo || "Não informado"}`
            ].join('\n'),
            inline: false
          }
        ]
        break

      case 'prototipos':
        title = "✨ [PROTÓTIPO] Nova solicitação de design"
        footerText = "Spacefy - Formulário de Protótipos"
        specificFields = [
          {
            name: "📝 Detalhes do Protótipo",
            value: [
              `**Objetivo:** ${formData.objetivo || "Não informado"}`,
              `**Referência:** ${formData.referencia === 'sim' ? 'Sim' : 'Não'}`,
              `**Link de Referência:** ${formData.referenciaLink || "Não informado"}`,
              `**Dispositivos:** ${formData.dispositivos === 'sim' ? 'Responsivo' : 'Versão única'}`
            ].join('\n'),
            inline: false
          }
        ]
        break
    }

    const timeAndBudget = {
      name: "⏱️ Prazo e Investimento",
      value: [
        `**Prazo:** ${formData.prazo || "Não informado"}`,
        `**Investimento:** ${formData.investimento || "Não informado"}`
      ].join('\n'),
      inline: false
    }

    const discordResponse = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: "@everyone",
        embeds: [{
          title,
          description: "Um novo lead acabou de preencher o formulário!",
          color: 0x4F46E8,
          fields: [...commonFields, ...specificFields, timeAndBudget],
          timestamp: new Date().toISOString(),
          footer: {
            text: footerText
          }
        }]
      })
    })

    if (!discordResponse.ok) {
      return NextResponse.json(
        { success: false },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Erro:', error)
    return NextResponse.json(
      { success: false },
      { status: 500 }
    )
  }
} 