import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File

    if (!file) {
      return NextResponse.json(
        { error: 'Niciun fișier uploadat' },
        { status: 400 }
      )
    }

    // Validare tip fișier
    const validTypes = [
      'application/pdf',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ]
    
    if (!validTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Doar PDF și DOCX sunt acceptate' },
        { status: 400 }
      )
    }

    // Mock data pentru demo - Mâine integrăm Claude pentru parsing real
    const mockCVText = `
JOHN DOE
Senior Software Engineer

Email: john.doe@email.com
Phone: +40 123 456 789
LinkedIn: linkedin.com/in/johndoe

EXPERIENCE

Senior Software Engineer | TechCorp | 2020 - Present
- Led team of 5 developers in building microservices architecture
- Implemented CI/CD pipeline reducing deployment time by 60%
- Technologies: Node.js, React, AWS, Docker

Software Engineer | StartupXYZ | 2018 - 2020
- Developed customer-facing web applications
- Collaborated with product team on feature planning
- Technologies: Python, Django, PostgreSQL

EDUCATION

Master's in Computer Science | Technical University | 2018
Bachelor's in Computer Science | University | 2016

SKILLS

Programming: JavaScript, TypeScript, Python, Java
Frameworks: React, Node.js, Express, Django
Tools: Git, Docker, AWS, CI/CD
Languages: English (Fluent), Romanian (Native)
    `.trim()

    return NextResponse.json({
      success: true,
      text: mockCVText,
      length: mockCVText.length,
      fileName: file.name,
      fileSize: Math.round(file.size / 1024),
      note: 'Demo data - Real parsing coming with Claude integration'
    })

  } catch (error) {
    console.error('Error processing file:', error)
    return NextResponse.json(
      { error: 'Eroare la procesarea fișierului' },
      { status: 500 }
    )
  }
}