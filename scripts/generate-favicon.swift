import AppKit
import CoreText

let repoURL = URL(fileURLWithPath: "/Users/franz.tanglao/GitHub/pang-app", isDirectory: true)
let appDir = repoURL.appendingPathComponent("app", isDirectory: true)
let fontURL = appDir.appendingPathComponent("static/fonts/FasterOne-Regular.ttf")

CTFontManagerRegisterFontsForURL(fontURL as CFURL, .process, nil)

guard let font = NSFont(name: "FasterOne-Regular", size: 41) else {
  fatalError("Could not load Faster One font from \(fontURL.path)")
}

let size = NSSize(width: 64, height: 64)
let image = NSImage(size: size)
image.lockFocus()

let navy = NSColor(calibratedRed: 10 / 255, green: 28 / 255, blue: 40 / 255, alpha: 1)
let teal = NSColor(calibratedRed: 18 / 255, green: 111 / 255, blue: 118 / 255, alpha: 1)
let cream = NSColor(calibratedRed: 247 / 255, green: 243 / 255, blue: 235 / 255, alpha: 1)
let gold = NSColor(calibratedRed: 198 / 255, green: 163 / 255, blue: 96 / 255, alpha: 1)

navy.setFill()
NSBezierPath(
  roundedRect: NSRect(x: 5.5, y: 5.5, width: 53, height: 53),
  xRadius: 12,
  yRadius: 12
).fill()

teal.setFill()
NSBezierPath(
  roundedRect: NSRect(x: 8.5, y: 8.5, width: 47, height: 47),
  xRadius: 10,
  yRadius: 10
).fill()

gold.setFill()
NSBezierPath(ovalIn: NSRect(x: 11, y: 41, width: 10, height: 10)).fill()

let paragraph = NSMutableParagraphStyle()
paragraph.alignment = .center

let attributes: [NSAttributedString.Key: Any] = [
  .font: font,
  .foregroundColor: cream,
  .paragraphStyle: paragraph,
  .kern: -0.8
]

let text = NSAttributedString(string: "P", attributes: attributes)
text.draw(in: NSRect(x: 10, y: 9, width: 44, height: 46))

image.unlockFocus()

guard
  let tiff = image.tiffRepresentation,
  let bitmap = NSBitmapImageRep(data: tiff),
  let png = bitmap.representation(using: .png, properties: [:])
else {
  fatalError("Failed to create PNG output")
}

let previewURL = appDir.appendingPathComponent("icon-preview.png")
let faviconURL = appDir.appendingPathComponent("favicon.ico")

try png.write(to: previewURL)

var ico = Data()
ico.append(
  contentsOf: [
    0x00, 0x00, 0x01, 0x00, 0x01, 0x00,
    0x40, 0x40, 0x00, 0x00, 0x01, 0x00, 0x20, 0x00
  ]
)

var pngLength = UInt32(png.count).littleEndian
withUnsafeBytes(of: &pngLength) { ico.append(contentsOf: $0) }

var offset = UInt32(22).littleEndian
withUnsafeBytes(of: &offset) { ico.append(contentsOf: $0) }

ico.append(png)

try ico.write(to: faviconURL)
